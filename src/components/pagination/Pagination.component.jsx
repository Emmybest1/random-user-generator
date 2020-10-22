import React from "react";

import "./pagination.style.scss";

const Pagination = ({ totalContact, contactPerPage, chagePageHandler }) => {
    const paginationNumber = [...new Array(totalContact / contactPerPage).keys()];

    return (
        <ul className="pagination container">
            {paginationNumber.map((x) => (
                <li key={x + 1}>
                    <a
                        href="!#"
                        onClick={(e) => {
                            e.preventDefault();
                            chagePageHandler(x + 1);
                        }}
                    >
                        {x + 1}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
