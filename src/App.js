import "./App.css";
import treeImg from "./assets/tree.jpg";
import BaseCard from "./components/BaseCard/BaseCard";
const data = {
  title: "Дерево",
  img: treeImg,
  descrpition:
    " A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow. One of the ways we distinguish trees from other plants is their thick and rigid ligneous tissues, which we know as wood.",
};

function App() {
  return (
    <div className="App">
      <BaseCard desc={data.descrpition} title={data.title} image={data.img} />
    </div>
  );
}

export default App;
