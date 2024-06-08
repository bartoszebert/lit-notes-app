import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/add-edit-note.js'; // Adjust the path as necessary

describe('AddEditNote Component', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<add-edit-note .show=${true}></add-edit-note>`);
  });

  it('should render correctly', () => {
    expect(element.shadowRoot.querySelector('.add-edit-note-form')).to.exist;
  });

  it('should show error messages when fields are empty on save', async () => {
    element._saveNote();
    await element.updateComplete;
    const errorTitle = element.shadowRoot.querySelector('error-message[message="Title field cannot be empty."]');
    const errorContent = element.shadowRoot.querySelector('error-message[message="Content field cannot be empty."]');
    expect(errorTitle).to.exist;
    expect(errorContent).to.exist;
  });

  it('should not show error messages when fields are filled on save', async () => {
    element.note = { title: 'Test Title', content: 'Test Content' };
    await element.updateComplete;
    element._saveNote();
    await element.updateComplete;
    const errorTitle = element.shadowRoot.querySelector('error-message[message="Title field cannot be empty."]');
    const errorContent = element.shadowRoot.querySelector('error-message[message="Content field cannot be empty."]');
    expect(errorTitle).to.not.have.attribute('visible');
    expect(errorContent).to.not.have.attribute('visible');
  });

  it('should dispatch save-note event with correct details', async () => {
    const spy = sinon.spy();
    element.addEventListener('save-note', spy);
    element.note = { title: 'Test Title', content: 'Test Content' };
    await element.updateComplete;
    element._saveNote();
    await element.updateComplete;
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.note.title).to.equal('Test Title');
    expect(eventDetail.note.content).to.equal('Test Content');
    expect(eventDetail.note.date).to.match(/\w{3} \d{1,2}/); // e.g., "Jun 8"
  });
});
