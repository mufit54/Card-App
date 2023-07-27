import { Button, Input, Textarea, Container, Grid, Stack } from "@mantine/core";
import "./App.css";
import Card from "./COMPENENTS/Card";
import { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

let arr = [
  {
    id: 1,
    title: "dağ 1",
    par: "acıklama 1",
  },
  {
    id: 2,
    title: "dağ 2",
    par: "acıklama 2",
  },
  {
    id: 3,
    title: "dağ 3",
    par: "acıklama 3",
  },
  {
    id: 4,
    title: "dağ 4",
    par: "acıklama 4",
  },
];

//const kare = (sayi) => sayi * sayi;

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState(arr);
  const [lesson, setLesson] = useState(11);
  const click = () => {
    setTitle("");
    setParagraph("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title: title,
      par: paragraf,
    });
    setList(copyList);
  };
  return (
    <Container>
      <h1>Kart oluşturma programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Paragraf yazınız"
          label="Paragraf"
          value={paragraf}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <Button variant="outline" onClick={click}>
          Kart oluştur
        </Button>
      </Stack>
      <h2>Kartlar:</h2>
      <Grid>
        {list.map(({ title, par }, i) => (
          <Grid.Col span={4} key={`ìndex ${i}`}>
            <Card title={title} par={par} lesson={lesson} a={i} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
