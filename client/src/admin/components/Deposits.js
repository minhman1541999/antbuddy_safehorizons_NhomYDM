import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    axios
        .get(`http://localhost:8080/subTotalByYear`)
        .then((response) => {
            setData(response.data[0])
        })
        .catch(function (error) {
            console.log(error);
        })
  },[])

  

  return (
    <React.Fragment>
      <Title>Recent Revenue</Title>
      <Typography component="p" variant="h4">
        {`$${Number(data.Subtotal).toLocaleString()}`}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {data.Year}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Details
        </Link>
      </div>
    </React.Fragment>
  );
}
