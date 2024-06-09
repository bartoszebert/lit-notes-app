import { LitElement, html } from "lit";
import "./components/add-edit-note.js";
import "./components/notes-list.js";
import "./components/ui/button-element.js";
import "./components/ui/input-field.js";
import { defaultStyles } from "./styles/default-style.js";
import { appStyles } from "./styles/app-style.js";
import "./components/delete-modal.js";
import { ariaLabels } from "./components/utils/aria-labels.js";

class AppRoot extends LitElement {
  static styles = [defaultStyles, appStyles];

  static properties = {
    notes: { type: Array },
    filteredNotes: { type: Array },
    currentNote: { type: Object },
    showAddEditNote: { type: Boolean },
    showDeleteModal: { type: Boolean },
    searchQuery: { type: String },
  };

  constructor() {
    super();
    this.notes = [];
    this.filteredNotes = [];
    this.currentNote = null;
    this.showAddEditNote = false;
    this.showDeleteModal = false;
    this.searchQuery = "";
  }

  render() {
    return html`<div class="app">
      <header aria-label="${ariaLabels.header}">
        <img src="./icons/notes.svg" alt="" />
        <h1>Notes</h1>
      </header>
      <main>
        <section id="controls">
          <input-field
            placeholder="Search notes..."
            @input-change="${this._updateSearchQuery}"
            aria-label="${ariaLabels.searchNotes}"
          ></input-field>
          ${this.notes.length > 0 && !this.showAddEditNote
            ? html` <button-element
                @click="${this._showAddEditForm}"
                type="primary"
                label="Add new"
                className="w-100"
                aria-label="${ariaLabels.addNewNoteButton}"
              ></button-element>`
            : ""}
        </section>
        <section id="add-edit-note">
          <add-edit-note
            .note="${this.currentNote}"
            ?show="${this.showAddEditNote}"
            @save-note="${this._saveNote}"
            @cancel-edit="${this._hideAddEditForm}"
          ></add-edit-note>
        </section>
        <section id="notes">
          <notes-list
            .allNotes="${this.notes}"
            .notes="${this.filteredNotes}"
            @edit-note="${this._editNoteHandler}"
            @delete-note="${this._deleteNoteHandler}"
            @add-note="${this._showAddEditForm}"
          ></notes-list>
        </section>
      </main>
      <delete-modal
        ?show="${this.showDeleteModal}"
        @confirm-delete="${this._confirmDeleteNote}"
        @cancel-delete="${this._hideDeleteModal}"
        aria-label="${ariaLabels.deleteNote}"
      ></delete-modal>
    </div>`;
  }

  _showAddEditForm() {
    this.currentNote = { title: "", content: "" };
    this.showAddEditNote = true;
  }

  _hideAddEditForm() {
    this.showAddEditNote = false;
    this.currentNote = null;
  }

  _saveNote(e) {
    const newNote = e.detail.note;
    if (newNote.id) {
      this.notes = this.notes.map((note) =>
        note.id === newNote.id ? newNote : note
      );
    } else {
      newNote.id = Date.now();
      this.notes = [...this.notes, newNote];
    }
    this._hideAddEditForm();
    this._updateFilteredNotes();
  }

  _editNoteHandler(e) {
    this.currentNote = { ...e.detail.note };
    this.showAddEditNote = true;
  }

  _deleteNoteHandler(e) {
    this.currentNote = e.detail.note;
    this.showDeleteModal = true;
  }

  _confirmDeleteNote() {
    this.notes = this.notes.filter((note) => note.id !== this.currentNote.id);
    this._hideDeleteModal();
    this._updateFilteredNotes();
  }

  _hideDeleteModal() {
    this.showDeleteModal = false;
    this.currentNote = null;
  }

  _updateSearchQuery(e) {
    this.searchQuery = e.detail.value.toLowerCase();
    this._updateFilteredNotes();
  }

  _updateFilteredNotes() {
    this.filteredNotes = this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.searchQuery) ||
        note.content.toLowerCase().includes(this.searchQuery)
    );
  }
}

customElements.define("app-root", AppRoot);
