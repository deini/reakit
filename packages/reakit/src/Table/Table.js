import { prop } from "styled-tools";
import styled from "../styled";
import as from "../as";
import Base from "../Base";

const Table = styled(Base)`
  ${prop("theme.Table")};
`;

Table.defaultProps = {
  role: "table"
};

export default as("table")(Table);
