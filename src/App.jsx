import { ListItemSuffix, ThemeProvider } from "@material-tailwind/react";
import { BsBookFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { LuHistory } from "react-icons/Lu";
import { MdOutlineRecentActors } from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegNewspaper, FaClipboardList } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

import { useState } from "react";
import React from "react";
import {
  Collapse,
  Avatar,
  Button,
  ListItemPrefix,
  Textarea,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  List,
  ListItem,
  Typography,
  CardBody,
} from "@material-tailwind/react";
function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);
  const data = [
    {
      label: "Write Material",
      value: "material",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Write Class",
      value: "class",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Write Section",
      value: "subject",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (

      <div className="w-[100vw] grid grid-cols-3 gap-4 font-poppins tracking-wide p-8 h-[100vh] bg-[#e9ecef] text-[#212529]">
        <div className="col-span-1 bg-white rounded-md border-[#ced4da] border-[1px] py-5">
          <div className="w-full flex justify-center">
            <Button
              onClick={toggleOpen}
              className="font-bold font-poppins flex gap-5 items-center text-xl bg-[#212529] text-[#e9ecef]"
            >
              My Library
              <span>
                <IoIosArrowDropdown className="font-[1000]" />
              </span>
            </Button>
          </div>
          <Collapse open={open}>
            <Card className="my-4 mx-auto w-8/12 border-[#ced4da] border-[1px]">
              <CardBody className="p-0">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <BsBookFill />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Books
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <GrNotes />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Notes
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <FaRegNewspaper />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Pre-paper
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <MdOutlineRecentActors />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Study List
                      </Typography>
                    </div>
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemPrefix>
                      <LuHistory />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        History
                      </Typography>
                    </div>
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemPrefix>
                      <RiRestartLine />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Recent Read
                      </Typography>
                    </div>
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="col-span-2 bg-white rounded-md border-[#ced4da] border-[1px] py-5 gap-5 flex flex-col">
          <div className=" px-5 py-1">
            <div className="w-full gap-2 flex justify-center items-center">
              <textarea
                name=""
                id=""
                className="w-[90%] py-2 px-5 font-4  border-[#ced4da] border-[2px] rounded-lg"
                rows="1"
                placeholder="Seacrh"
              ></textarea>
              <AiOutlineSearch className="text-[1.5rem]" />
            </div>
          </div>
          <div className="w-full p-5 flex justify-center ">
            <Tabs value="material" className="w-[90%] font-poppins ">
              <TabsHeader className="">
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    <Textarea placeholder={`Enter ${value}`}></Textarea>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
   
  );
}

export default App;
