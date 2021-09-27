import React from 'react';

let FilterDate = () => {
    return (
        <>
            <h1 className="h1DateFilter">Filter by Year</h1>
            <div className="divDate">
                <a className="aDate" href="/filter/date/1930/1939">1930 - 1939</a>
                <a className="aDate" href="/filter/date/1940/1949">1940 - 1949</a>
                <a className="aDate" href="/filter/date/1950/1959">1950 - 1959</a>
                <a className="aDate" href="/filter/date/1960/1969">1960 - 1969</a>
                <a className="aDate" href="/filter/date/1970/1979">1970 - 1979</a>
                <a className="aDate" href="/filter/date/1980/1989">1980 - 1989</a>
                <a className="aDate" href="/filter/date/1990/1999">1990 - 1999</a>
                <a className="aDate" href="/filter/date/2000/2009">2000 - 2009</a>
                <a className="aDate" href="/filter/date/2010/2021">2010+</a>
            </div>
        </>
    )
}

export default FilterDate;