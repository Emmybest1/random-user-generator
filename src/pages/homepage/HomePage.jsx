import React, { useState, useEffect, Fragment } from "react";

import { getContacts } from "../../data/contacts";
import Section from "../../structure/section/Section.component";
import Search from "../../components/search/Search.component";
import Counter from "../../components/counter/Counter.component";
import Card from "../../components/card/Card.component";
import Pagination from "../../components/pagination/Pagination.component";
import "./homepage.style.scss";

const HomePage = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalContactPerPage] = useState(10);

    useEffect(() => {
        getContacts().then((data) => {
            setContacts(data.results);
            setIsLoading(false);
        });
    }, []);

    const endingIndex = currentPage * totalContactPerPage; //10
    const startingIndex = endingIndex - totalContactPerPage; //0
    const contactPerPage = contacts.slice(startingIndex, endingIndex); //give us the first 0,10 following indexing rule

    const onChangePageHandler = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <main>
            {contacts.length > 0 ? (
                <Fragment>
                    <Section>
                        <Search />
                    </Section>

                    <Section>
                        <Counter total={5} />
                    </Section>

                    <Section>
                        <Card contacts={contactPerPage} />
                        <Pagination
                            totalContact={contacts.length}
                            contactPerPage={totalContactPerPage}
                            chagePageHandler={onChangePageHandler}
                        />
                    </Section>
                </Fragment>
            ) : (
                !isLoading && <p>Contacts Empty</p>
            )}
        </main>
    );
};

export default HomePage;
