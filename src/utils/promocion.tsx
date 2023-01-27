import { createStyles, Text, Title, Image } from '@mantine/core';
import image from './img/elecciones.png';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing.xl * 1,
    paddingLeft: theme.spacing.xl * 1,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
    margin: 'auto',
    maxWidth: '1000px',
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function EmailBanner() {
  const { classes } = useStyles();
  return (
    <div style={{ margin: '10px 15px' }}>
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title} style={{ color: 'rgb(233 177 75)' }}>Vota <span style={{ color: 'orange' }}>FUA</span> </Title>
        <Text weight={500} size="lg" mb={5} color='#e9b14b'>
          Recuerda que esto es posible gracias al partido, <b>¿apoyas nuestra iniciativa?</b>
        </Text>
        <Text size="sm" color="dimmed">
          Si votas tendras total acceso al sistema, de lo contrario un hamster cuantico malvado destruira el sistema. <sub>(es enserio, no es q me hayan obligado a poner esta descripción)</sub>
        </Text>
      </div>
      <Image src={image} className={classes.image} />
    </div>
    </div>
  );
}