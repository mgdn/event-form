import React from "react";
import { useDispatch } from "react-redux";
import Header from "components/Header";
import Layout from "components/Layout";
import EventForm from "./EventForm";
import { addEvent } from "../eventsSlice";
import { mapFormDataToEvent } from "../utils/dataFormat";

export const AddEventPage = ({ history }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const event = mapFormDataToEvent(data);
    dispatch(addEvent(event));
    console.log("Event", event);
    history.push("/success");
  };

  return (
    <>
      <Header title="New Event" />
      <Layout>
        <EventForm onSubmit={onSubmit} />
      </Layout>
    </>
  );
};

export { AddEventPage as default };
