import axios from 'axios';

export default axios.create({
  // TODO: Use env variable instead (prod vs dev)
  baseURL: `http://example.com`
});
