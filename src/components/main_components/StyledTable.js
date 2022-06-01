import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  font-family: 'PixelarRegularW01-Regular';
  text-align: center;
  font-size: 24px;
  border: none;
  border-collapse: collapse;

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */
            
  td,
  th {
    border: none;
    width: ${props => 100 / props.numOfCol}%;
  }
  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :nth-of-type(even) {
      background-color: lightgray;
    }
    :hover {
      background-color: #F9D923;
    }
  }
  thead > tr {
    background-color: #F9D923;
    
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

const table = ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
export default table;
