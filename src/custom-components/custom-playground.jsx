import React from "react";
import Clipboard from "react-clipboard.js";
import "./custom-playground.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Layout(props) {
  return (
    <Tabs className="custom-playground">
      <TabList class="custom-playground__top">
        <Tab>Scss</Tab>
        <Tab>Js</Tab>
        <Tab>Html</Tab>
      </TabList>

      <TabPanel className="css">
        <Clipboard data-clipboard-target="#css">
          <i class="fas fa-copy"></i>
        </Clipboard>
        <div id="css">{props.css}</div>
      </TabPanel>

      <TabPanel className="js">
        <Clipboard data-clipboard-target="#js">
          <i class="fas fa-copy"></i>
        </Clipboard>
        <div id="js">{props.js}</div>
      </TabPanel>

      <TabPanel className="html">
        <Clipboard data-clipboard-target="#html">
          <i class="fas fa-copy"></i>
        </Clipboard>
        <div id="html">{props.html}</div>
      </TabPanel>
    </Tabs>
  );
}

export default Layout;
