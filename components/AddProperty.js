import { Form, Input, Button, InputNumber, Checkbox } from "antd";
import { Row, Col, Divider } from "antd";

export default function AddProperty() {
  const [form] = Form.useForm();
  const options = [
    { label: "I - Automatic Sprinkler", value: "automaticSprinkler" },
    { label: "II - Fire Pump", value: "firePump" },
    { label: "III - Water Supply System", value: "waterSupplySystem" },
    {
      label: "IV - Standpipe and Hose System",
      value: "standpipeAndHoseSystem",
    },
    { label: "V - Fire Hydrants", value: "fireHydrants" },
    { label: "VI - Water Mist System", value: "waterMistSystem" },
    { label: "VII - Foam System", value: "foamSystem" },
    {
      label: "VIII - Fixed Wet Chemical Extinguishing System",
      value: "fixedWetChemicalExtinguishingSystem",
    },
    {
      label: "IX - Clean Agent Fire Extinguishing System",
      value: "cleanAgentFireExtinguishingSystem",
    },
    { label: "X - Fixed Aerosol System", value: "fixedAerosoleSystem" },
    {
      label: "XI - Portable Fire Extinguisher",
      value: "portableFireExtinguisher",
    },
    {
      label: "XII - Fire Detection And Alarm System",
      value: "fireDetectionAndAlarmSystem",
    },
    {
      label: "XIII - Emergency Lighting & EPSS",
      value: "emergencyLightingEPSS",
    },
    { label: "XV - Others", value: "others" },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{ span: 24, style: { paddingTop: 3 } }}
      wrapperCol={{ span: 24 }}
      size="small"
      initialValues={{
        remember: [],
      }}
    >
      <Row>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Building Name"
            name="buildingName"
            rules={[
              {
                required: true,
                message: "Please enter the building name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="QCD Building Completion Certificate No"
            name="buildingCompletionCertificateNumber"
            rules={[
              {
                required: true,
                message:
                  "Please enter the QCD Building Completion Certificate No",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={8} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Bldg. No."
            name="buildingNo"
            rules={[
              {
                required: true,
                message: "Please enter the building No. ",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={4} xs={8} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Street No."
            name="streetNo"
            rules={[
              {
                required: true,
                message: "Please enter the street No.",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={4} xs={8} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Zone No."
            name="zoneNo"
            rules={[
              {
                required: true,
                message: "Please enter the zone No.",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Office Contact Nos"
            name="contactNumber"
            rules={[
              {
                required: true,
                message: "Please enter the office contact number",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Occupancy Classification"
            name="occupancyClassification"
            rules={[
              {
                required: true,
                message: "Please enter the occupancy classification",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Building Height"
            name="buildingHeight"
            rules={[
              {
                required: true,
                message: "Please enter the building height",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Building Area"
            name="buildingArea"
            rules={[
              {
                required: true,
                message: "Please enter the building area",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Type of construction"
            name="typeOfConstruction"
            rules={[
              {
                required: true,
                message: "Please enter the type of construction",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col md={12} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            label="Hazard Classification"
            name="hazardClassification"
            rules={[
              {
                required: true,
                message: "Please enter the hazard classification",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col style={{ paddingLeft: "10px" }}>
          <Form.Item
            name="fireProtectionSystems"
            label="Fire Protection Systems"
            rules={[
              {
                required: true,
                message: "Please select the fire protection systems",
              },
            ]}
          >
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                {options.map((option) => (
                  <Col key={option.value} md={12} xs={24}>
                    <Checkbox value={option.value}>{option.label}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col md={8} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item name="isOccupied" valuePropName="checked">
            <Checkbox>Is the building occupied?</Checkbox>
          </Form.Item>
        </Col>
        <Col md={8} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item name="occupancyAndHazard" valuePropName="checked">
            <Checkbox>Has occupancy and hazard remained the same?</Checkbox>
          </Form.Item>
        </Col>
        <Col md={8} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item
            name="allFireProtectionSystemsInService"
            valuePropName="checked"
          >
            <Checkbox>Are all Fire Protection Systems In Service?</Checkbox>
          </Form.Item>
        </Col>
        <Col md={8} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item name="systemNotModified" valuePropName="checked">
            <Checkbox>System has not been modified?</Checkbox>
          </Form.Item>
        </Col>
        <Col md={8} xs={24} style={{ paddingLeft: "10px" }}>
          <Form.Item name="systemsFreeFromActuation" valuePropName="checked">
            <Checkbox>
              Was the system free from actuation of devices or alarms?
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={0} style={{ paddingLeft: "10px" }} />
        <Col md={6} xs={12} style={{ paddingLeft: "10px" }}>
          <Button size="middle" block type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
        <Col md={6} xs={12} style={{ paddingLeft: "10px" }}>
          <Button size="middle" block htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Col>
        <Col md={6} xs={0} style={{ paddingLeft: "10px" }} />
      </Row>
    </Form>
  );
}
