import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.error.main : theme.palette.error.main,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: theme.palette.error.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  tableWrap: {
    marginTop: '20px'
  },
  Hidden: {
    visibility: 'hidden'
  }
}));

const info = [
  {
    title: 'Снабжающие склады',
    price: 'нехватка сырья',
    description: ['склад Q313M', 'наполняется: ', 'G_APPH', 'G_ANGCH'],
    buttonText: 'решить проблему',
    buttonVariant: 'outlined',
  },
  {
    title: 'Оборудование с неполной загрузкой S_ANGC3H',
    subheader: '',
    price: '36%',
    description: [
    ],
    buttonVariant: 'contained',
  },
  {
    title: 'Отгрузочные склады',
    price: 'перегруз',
    description: [
      'склад Q3137',
      'и склад Q313C',
      'освобождаются:',
      'G_APPH, G_ANGCH, G_APRR',
      'G_NTAH, G_ANOH, G_ST203H',
      'G_APOR'
    ],
    buttonText: 'решить проблему',
    buttonVariant: 'outlined',
  },
];

const problemAgregate = {
  S_ANGC3H: {
    "1633726800000": {
      "inputInfo": {
        "Q313M": "not enough resources"
      },
      "outputInfo": {
        "Q3137": "not enough space",
        "Q313C": "not enough space"
      }
    }
  }
}

const S_ANGC3H = {
  "agregateBefore": {
    "1633726800000": [
      {
        "machineId": "G_APPH",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_ANGCH",
        "occupiedPercentage": "no data"
      }
    ]
  },
  "agregateAfter": {
    "1633726800000": [
      {
        "machineId": "G_APPH",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_ANGCH",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_APRR",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_NTAH",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_ANOH",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_ST203H",
        "occupiedPercentage": "no data"
      },
      {
        "machineId": "G_APOR",
        "occupiedPercentage": "no data"
      }
    ]
  }
}

function createData(warhouseSupply, machine, warhauseOut) {
  return { warhouseSupply, machine, warhauseOut };
}



const rows = [
  createData('-', 'S_NTA2H', 'Q313M'),
  createData('G_APPH, G_ANGCH', 'S_ANGC3H', 'Q3137, Q313C'),
  createData('-', 'S_ST203H', 'Q313C'),
  createData('Q315M', 'S_ANGC2D', 'Q315B, Q315C'),
  createData('Q313M', 'S_ANGC1H', 'Q313C'),
];

export default function AgregateProblem() {
  const classes = useStyles();
  const [isWarning, setIsWarning] = useState(true);

  function changeColor(clicked) {
    if (clicked) {
      setIsWarning(false);
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Цепочка склад-оборудование-склад
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Поиск причин снижения загруженности оборудования на {new Date(1633726800000).toLocaleDateString()}
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
          {isWarning && info.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Оборудование с неполной загрузкой' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  {
                    tier.buttonText ?
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                      : null
                  }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <TableContainer component={Paper} className={classes.tableWrap}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">Склады поставки</TableCell>
              <TableCell align="center">Оборудование</TableCell>
              <TableCell align="center">Склады отгрузки</TableCell>
              <TableCell align="center">Решение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={(row.warhouseSupply === 'G_APPH, G_ANGCH' && isWarning) ? classes.warning : ''} onClick={(e) => changeColor(row.warhouseSupply === 'G_APPH, G_ANGCH')}>
                <TableCell align="center">{row.warhouseSupply}</TableCell>
                <TableCell align="center">{row.warhouseSupply === 'G_APPH, G_ANGCH' ? (isWarning ? row.machine : 'S_C2H') : row.machine}</TableCell>
                <TableCell align="center">{row.warhauseOut}</TableCell>
                <TableCell align="center">{(row.warhouseSupply === 'G_APPH, G_ANGCH' && isWarning) ? <CheckIcon color='success' /> : ''}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>)
}
