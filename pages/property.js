import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Table, Button, Row, Col, Divider, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddProperty from "../components/addProperty";

export default function property() {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: "Ref No.",
      dataIndex: "pfid",
      key: "pfid",
    },
    {
      title: "Building No.",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Building Name",
      dataIndex: "site",
      key: "site",
    },
    {
      title: "Status",
      dataIndex: "timestamp",
      key: "timestamp",
    },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Row style={{ marginBottom: 10 }}>
        <Col style={{ paddingTop: 5 }} span="12">
          <h4 style={{ margin: 0 }}>Property Details : </h4>
        </Col>
        <Col span="12">
          <Button
            style={{ float: "right" }}
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => setIsModalVisible(true)}
          >
            Add new building
          </Button>
        </Col>
      </Row>

      <Table dataSource={data} columns={columns} />
      <Modal
        title="Add a new building"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        zIndex={10000}
        footer={null}
        className="addNewBuildingModal"
      >
        <AddProperty />
      </Modal>
    </Layout>
  );
}
