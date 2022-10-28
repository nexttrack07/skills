import {
  Button,
  createStyles,
  Drawer,
  Group,
  NumberInput,
  Text,
  Stack,
  Textarea,
  TextInput,
  Title,
  Space,
  Select,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  form: {
    padding: theme.spacing.md,
    flex: 1
  },
}));

export function CreateCourse() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Button onClick={() => setOpened(true)} leftIcon={<IconPlus />}>
        New Course
      </Button>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="xl"
        title={<Title order={3}>Create New Course</Title>}
        styles={theme => ({
          title: {
            paddingTop: theme.spacing.xl,
            paddingLeft: theme.spacing.lg
          },
          drawer: {
            display: "flex",
            flexDirection: "column"
          }
        })}
      >
        <form className={classes.form}>
          <Stack sx={{ height: "100%"}} justify="space-between">
            <Stack>
              <TextInput label="Title" withAsterisk />
              <Textarea label="Description" />
              <Group>
                <TextInput label="Author" />
                <Select label="Level" placeholder="choose the level" data={[
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "advanced", label: "Advanced" },
                ]} />
                <NumberInput label="Hours" />
                <NumberInput label="Lessons" />
              </Group>
              <Space my="md" />
              <Stack>
                <Text weight={500} size="sm">Learning Objectives</Text>
                <TextInput placeholder="feature 1" />
                <TextInput placeholder="feature 2" />
                <TextInput placeholder="feature 3" />
                <TextInput placeholder="feature 4" />
                <TextInput placeholder="feature 5" />
                <TextInput placeholder="feature 6" />
              </Stack>
            </Stack>
            <Button mt="xl" fullWidth variant="outline"> 
              Submit
            </Button>
          </Stack>
        </form>
      </Drawer>
    </>
  );
}
