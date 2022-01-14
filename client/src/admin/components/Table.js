import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Title from './Title';
import { Box } from '@mui/material';

export default function CustomTable(props) {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Title >{props.title}</Title>
        {props.topRight}
      </Box>
      <Table size="small">
        {
          props.headData && props.renderHead ? (
            <TableHead>
              <tr>
                {
                  props.headData.map((item, index) => props.renderHead(item, index))
                }
              </tr>
            </TableHead>
          ) : null
        }
        {
          props.bodyData && props.renderBody ? (
            <TableBody>
              {
                props.bodyData.map((item, index) => props.renderBody(item, index))
              }
            </TableBody>
          ) : null
        }
      </Table>
    </React.Fragment>
  );
}
