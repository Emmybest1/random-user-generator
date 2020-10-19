import React, { useState, useEffect } from "react";

import { getContacts } from "../../data/contacts";
import Section from "../../structure/section/Section.component";
import Search from "../../components/search/Search.component";
import Counter from "../../components/counter/Counter.component";
import Card from "../../components/card/Card.component";
import "./homepage.style.scss";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(response => {
      console.log(response);
    });
  }, []);

  return (
    <main>
      <Section>
        <Search />
      </Section>

      <Section>
        <Counter total={5} />
      </Section>

      <Section>
        <Card contacts={contacts} />
      </Section>
    </main>
  );
};

export default HomePage;
