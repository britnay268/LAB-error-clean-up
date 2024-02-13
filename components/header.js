import renderToDOM from '../utils/renderToDom';

const header = () => {
  const domString = `
  <h1 style="text-shadow:0px 0px 10px black;">Welcome to Hoggy Hoggy Warts, RELOADED!</h1>
  <p style="text-shadow:0px 0px 20px black; margin-top:20px; font-size:18px;">Come be apart of the Harry Potter Experience! Lets see what house you would be in if you attended Hogwarts.</p>
  <hr>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Get Started
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="name">Enter First Year's Name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>

        <div class="mb-3">
          <label class="form-label">Student:</label>
          <input type="text" class="form-control" id="student" required>
          <button type="submit" class="btn btn-primary" id="sort">Sort</button>
        </div>

        </form>
        </div>
      </div>
    </div>
  </div>
  `;

  renderToDOM('#createCardContainer', domString);
};

export default header;
