import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Tooltip,
  CardMedia,
  CardHeader,
  Avatar,
  CardContent,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Controls from "../components/Controls";

export default function ServiceCategory() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    //call the function to gain sub classes..using index as id.
    setSelectedIndex(index);
  };

  const [services, setService] = useState([
    { title: "Electronics service", id: 1 },
    { title: "Cloths service", id: 2 },
    { title: "Education service", id: 3 },
    { title: "Foods service", id: 4 },
  ]);

  return (
    <List component="nav" aria-label="secondary mailbox folder">
      {services.map((service) => (
        <ListItem
          button
          selected={selectedIndex === service["id"]}
          onClick={(event) => handleListItemClick(event, service["id"])}
        >
          <ListItemText primary={service.title} />
        </ListItem>
      ))}
    </List>
  );
}
