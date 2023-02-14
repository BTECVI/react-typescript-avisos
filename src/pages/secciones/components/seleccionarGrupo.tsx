import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: '#f5f5f5'  
  },

  titulo: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export function SeleccionarGrupoComponente({ info }: any) {
  const { classes, theme } = useStyles();

  const items = info.map((item: any) => (
    <Link to={item.link} key={item.titulo} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.titulo}
      </Text>
    </Link>
  ));

  return (
    <Card radius="md" className={classes.card}>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
