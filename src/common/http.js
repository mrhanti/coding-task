import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

// Setup caching at Network level
// Application-level caching is also required
// in this app scenario
export default axios.create({
  adapter: cache.adapter
});