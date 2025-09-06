import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Space, Popconfirm, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Aceite lubricante",
      categoria: "Lubricantes",
      stock: 50,
      unidad: "Litros",
    },
    {
      id: 2,
      nombre: "Filtro de aire",
      categoria: "Filtros",
      stock: 20,
      unidad: "Unidades",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProducto, setEditingProducto] = useState(null);
  const [form] = Form.useForm();

  const showModal = (producto = null) => {
    setEditingProducto(producto);
    if (producto) {
      form.setFieldsValue(producto);
    } else {
      form.resetFields();
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingProducto(null);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingProducto) {
          // Editar producto
          setProductos((prev) =>
            prev.map((p) => (p.id === editingProducto.id ? { ...p, ...values } : p))
          );
          message.success("Producto actualizado correctamente");
        } else {
          // Crear nuevo producto
          const newProducto = { id: Date.now(), ...values };
          setProductos((prev) => [...prev, newProducto]);
          message.success("Producto agregado correctamente");
        }
        handleCancel();
      })
      .catch(() => {
        message.error("Por favor completa los campos obligatorios");
      });
  };

  const handleDelete = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
    message.success("Producto eliminado");
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Categoría",
      dataIndex: "categoria",
      key: "categoria",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Unidad",
      dataIndex: "unidad",
      key: "unidad",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
          />
          <Popconfirm
            title="¿Eliminar producto?"
            onConfirm={() => handleDelete(record.id)}
            okText="Sí"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gestión de Productos</h1>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        className="mb-4"
      >
        Nuevo Producto
      </Button>

      <Table
        columns={columns}
        dataSource={productos}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingProducto ? "Editar Producto" : "Nuevo Producto"}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleSave}
        okText="Guardar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[{ required: true, message: "Ingrese el nombre" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="categoria"
            label="Categoría"
            rules={[{ required: true, message: "Ingrese la categoría" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: "Ingrese el stock" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="unidad"
            label="Unidad"
            rules={[{ required: true, message: "Ingrese la unidad" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Productos;
