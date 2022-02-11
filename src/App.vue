<template>
  <div id="app">
    <img @click="editMode = !editMode" id="icon" src="./assets/static/edit.svg" alt />
    <img id="logo-back" src="./assets/static/1.png" alt />
    <LogoResize :editMode="editMode" />
    <img id="titulo-back" src="./assets/static/2.png" alt />
    <h1
      @click="showModal(titulo, 'titulo')"
      id="titulo"
      :style="{fontSize: `${titulo.fontSize}em`}"
    >{{titulo.text.toUpperCase()}}</h1>
    <h3
      @click="showModal(desc, 'desc')"
      id="desc"
      :style="{fontSize: `${desc.fontSize}em`}"
    >{{desc.text.toUpperCase()}}</h3>
    <ImageResize :editMode="editMode" />
    <div id="table-container">
      <div id="table-title-container">
        <h2
          @click="showModal(tableTitle, 'tableTitle')"
          id="table-title"
          :style="{fontSize: `${tableTitle.fontSize}em`}"
        >{{tableTitle.text.toUpperCase()}}</h2>
      </div>
      <div class="table-cell" :style="{borderLeft: '2px solid black'}">
        <p
          :style="{fontSize: '1em'}"
          class="cell-text"
        >DIÁMETRO EXTERIOR</p>
      </div>
      <div class="table-cell">
        <p
          :style="{fontSize: '1em'}"
          class="cell-text"
        >DIÁMETRO INTERIOR</p>
      </div>
      <div class="table-cell" :style="{borderRight: '2px solid black'}">
        <p
          :style="{fontSize: '1em'}"
          class="cell-text"
        >ALTURA</p>
      </div>
      <div class="table-cell" :style="{borderLeft: '2px solid black', borderBottom: '2px solid black'}">
        <p
          :style="{fontSize: `${cellTextOne.fontSize}em`}"
          @click="showModal(cellTextOne, 'cellTextOne')"
          class="cell-text"
        >{{cellTextOne.text}}</p>
      </div>
      <div class="table-cell" :style="{borderBottom: '2px solid black'}">
        <p
          :style="{fontSize: `${cellTextTwo.fontSize}em`}"
          @click="showModal(cellTextTwo, 'cellTextTwo')"
          class="cell-text"
        >{{cellTextTwo.text}}</p>
      </div>
      <div class="table-cell" :style="{borderRight: '2px solid black', borderBottom: '2px solid black'}">
        <p
          :style="{fontSize: `${cellTextThree.fontSize}em`}"
          @click="showModal(cellTextThree, 'cellTextThree')"
          class="cell-text"
        >{{cellTextThree.text}}</p>
      </div>
      <div id="caracteristicas">
        <img id="carac-img" src="./assets/static/3.png" alt />
      </div>
      <h3 id="carac-text">CARACTERISTICAS</h3>
      <p
        @click="showModal(caracteristicas, 'caracteristicas')"
        :style="{fontSize: `${caracteristicas.fontSize}em`}"
        id="carac-desc"
      >{{caracteristicas.text}}</p>
    </div>
    <div id="end-table-container">
      <div id="end-table-first-text">
        <p
          @click="showModal(endTableFirstText, 'endTableFirstText')"
          :style="{fontSize: `${endTableFirstText.fontSize}em`}"
          class="cell-text"
        >{{endTableFirstText.text}}</p>
      </div>
      <div id="end-table-title">
        <h3
          @click="showModal(endTableTitle, 'endTableTitle')"
          :style="{fontSize: `${endTableTitle.fontSize}em`,margin: 0}"
        >ORIGINAL: {{endTableTitle.text}}</h3>
      </div>
      <div @click="showModal(endTableCellTextsOne, 'endTableCellTextsOne')" class="end-table-cell">
        <p
          :style="{fontSize: `${endTableCellTextsOne.fontSize}em`}"
          class="end-table-cell-text"
          v-for="(v, i) in endTableCellTextsOne.text.split(', ')"
          :key="i"
        >{{v}}</p>
      </div>
      <div class="end-table-cell" @click="showModal(endTableCellTextsTwo, 'endTableCellTextsTwo')">
        <p
          :style="{fontSize: `${endTableCellTextsTwo.fontSize}em`}"
          class="end-table-cell-text"
          v-for="(v, i) in endTableCellTextsTwo.text.split(', ')"
          :key="i"
        >{{v}}</p>
      </div>
    </div>
    <ImageResizeEnd :editMode="editMode" />
    <img id="end-logo-back" src="./assets/static/4.png" alt />
    <div id="end-logo">
      <h1 @click="showModal(endTitle, 'endTitle')" :style="{fontSize: `${endTitle.fontSize}em`}">{{endTitle.text}}</h1>
    </div>
    <modal
      reset
      draggable
      name="edit"
      clickToClose
      resizable
      classes="modal-edit"
      @before-open="beforeOpen"
    >
      <h2 class="modal-title">Editar componente</h2>
      <textarea class="text-area" v-model="modalText"></textarea>
      <div class="tamano-letra">
        <label>Tamaño de letra:</label>
        <input v-model="modalSize" step=".1" type="number" />
      </div>
      <button @click="save" class="btn btn-success">Guardar</button>
      <button @click="close" class="btn btn-danger">Cerrar</button>
    </modal>
  </div>
</template>

<script>
import ImageResize from "./components/ImageResize";
import ImageResizeEnd from './components/ImageResizeEnd'
import LogoResize from './components/LogoResize'
export default {
  data() {
    return {
      editMode: false,
      titulo: {
        text: "Hoja de venta DAE 34562524",
        fontSize: 2
      },
      desc: {
        text: "Cargador frontal de bajo perfil",
        fontSize: 1.17
      },
      tableTitle: {
        text: "LAKDFJLKADJFKADJFJFAD;FA;DKFKAJFHL KAJFKADJF;AJD;KFJAD;KJFA;DK",
        fontSize: 1.2
      },
      cellTextOne: {
        text: "aksjhdlashdjlasjd",
        fontSize: 0.8
      },
      cellTextTwo: {
        text: "aksjhdlashdjlasjd",
        fontSize: 0.8
      },
      cellTextThree: {
        text: "aksjhdlashdjlasjd",
        fontSize: 0.8
      },
      endTableFirstText: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.",
        fontSize: 0.8
      },
      endTableTitle: {
        text: "VOLVO 9851482",
        fontSize: 1.17
      },
      endTableCellTextsOne: {
        text: "CAT P5120, DONALSON 2345, LYS 289040, PURO AEW876",
        fontSize: 0.8,
      },
      endTableCellTextsTwo: {
        text: "CAT P5120, DONALSON 2345, LYS 289040, PURO AEW876",
        fontSize: 0.8,
      },
      caracteristicas: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.",
        fontSize: 0.85
      },
      endTitle: {
        text: 'FILTROS WILLY BUSCH',
        fontSize: 2,
      },
      modalText: "",
      comp: "",
      index: 0,
      modalSize: "",
      arrayMode: false
    };
  },
  methods: {
    showModal(text, key) {
      this.arrayMode = false;
      this.$modal.show("edit", { text, key });
    },
    asArray(s) {
      return s.split(', ')
    },
    beforeOpen(e) {
      if (this.arrayMode) {
        this.index = e.params.i;
        this.modalText = e.params.arr.join(", ");
        this.modalSize = this.fontSize;
      } else {
        this.comp = e.params.key;
        this.modalText = e.params.text.text;
        this.modalSize = e.params.text.fontSize;
      }
    },
    save() {
      if (this.arrayMode) {
        this.endTableCellTexts[this.index] = []
        this.fontSize = this.modalSize;
        this.$modal.hide("edit");
      } else {
        this[this.comp].text = this.modalText;
        this[this.comp].fontSize = this.modalSize;
        this.$modal.hide("edit");
      }
    },
    close() {
      this.$modal.hide("edit");
    }
  },
  components: { ImageResize, ImageResizeEnd, LogoResize }
};
</script>

<style>
.modal-edit {
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 3fr 50px 40px;
  place-items: center center;
}
.modal-title {
  grid-row: 1 / 2;
  grid-column: 1 /3;
}
.text-area {
  border-radius: 10px;
  padding: 10px;
  color: grey;
  width: 80%;
  height: 80%;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
}
.text-area:focus {
  outline: none;
  border: 1px solid #ffcccc;
}
.btn {
  grid-row: 4 / 5;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.6s linear;
}
.btn-success {
  color: hsl(141, 71%, 48%);
}
.btn-danger {
  color: hsl(348, 100%, 61%);
}
.btn-success:hover {
  color: white;
  background: hsl(141, 71%, 48%);
}
.btn-danger:hover {
  color: white;
  background: hsl(348, 100%, 61%);
}
.tamano-letra {
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-around;
}
input {
  margin: 0 10px;
  border-radius: 5px;
  padding: 3px;
}
</style>
