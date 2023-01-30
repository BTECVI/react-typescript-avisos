import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconScriptPlus,
  IconBook,
  IconChartPie3,
  IconCalendarEvent,
  IconChevronDown,
} from "@tabler/icons-react";

const logoBtecvi = 'https://cdn.btecvi.com/btecvi.jpg'

import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconScriptPlus,
    titulo: "Mandar sugerencia",
    descripcion:
      "Proximamente se podran enviar sugerencias y/o quejas de forma anónima",
  },
  {
    icon: IconCalendarEvent,
    titulo: "Proximos eventos",
    descripcion:
      "Proximamente se podran ver proximos eventos que se realicen en el colegio",
  },
  {
    icon: IconBook,
    titulo: "Ver calificaciones",
    descripcion:
      "Proximamente podrán iniciar sesión con un usuario y contraseña otorgada por la escuela para ver las calificaciones individuales",
  },
  {
    icon: IconNotification,
    titulo: "Ver notificaciones",
    descripcion:
      "Proximamente se podran recibir notificaciones al instante que se publica algo nuevo",
  },
  {
    icon: IconChartPie3,
    titulo: "Entre otras cosas",
    descripcion:
      "Poco a poquito se le iran agregando nuevas funciones al sistema 😀",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.titulo}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.titulo}
          </Text>
          <Text size="xs" color="dimmed">
            {item.descripcion}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={80} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <img src={logoBtecvi} width="60px" />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/" className={classes.link}>
              Inicio
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Menu
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>
                    Menu de acciones <b>(PROXIMAMENTE)</b>
                  </Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Proximamente
                      </Text>
                      <Text size="xs" color="dimmed">
                        Todas las funciones anteriormente mencionadas seran
                        agregadas en el mes de Febrero y Marzo. Por el momento
                        te invitamos a visitar los avisos escolares de tu salon
                      </Text>
                    </div>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/secciones/bachillerato" className={classes.link}>
              Bachillerato
            </Link>
            <Link to="/secciones/secundaria" className={classes.link}>
              Secundaria
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">Proximamente Inicio de Sesion</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link to="/" onClick={closeDrawer} className={classes.link}>
            Inicio
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Menu de Acciones <b>(PROXIMAMENTE)</b>
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="/secciones/bachillerato"  onClick={closeDrawer} className={classes.link}>
            Bachillerato
          </Link>
          <Link to="/secciones/secundaria"  onClick={closeDrawer} className={classes.link}>
            Secundaria
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Proximamente inicio de sesión</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
