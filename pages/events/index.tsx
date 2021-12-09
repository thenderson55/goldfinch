import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";

export type EventType = {
  id: number;
  title: string;
  description: string;
  category: string;
  data: string;
};

function EventList({ eventList }: { eventList: EventType[] }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();

    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return <div key={event.id}>{event.title}</div>;
      })}
    </div>
  );
}

export default EventList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
};
