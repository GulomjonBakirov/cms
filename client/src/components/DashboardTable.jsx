import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DashboardTable = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Students" key="1">
      Students table
    </TabPane>
    <TabPane tab="Teachers" key="2">
      Teachers table
    </TabPane>
    <TabPane tab="Staffs" key="3">
      Staffs table
    </TabPane>
  </Tabs>
);
export default DashboardTable;
