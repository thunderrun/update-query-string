class QueryString {
  constructor() {
    this.searchParams = new URLSearchParams(location.search);
  }

  replaceState() {
    history.replaceState(
      undefined,
      undefined,
      `?${this.searchParams.toString()}`
    );
  }

  append(key, val) {
    this.searchParams.append(key, val);
    this.replaceState();
  }

  delete(key) {
    this.searchParams.delete(key);
    this.replaceState();
  }

  entries() {
    return this.searchParams.entries();
  }

  get(key) {
    return this.searchParams.get(key);
  }

  getAll(key) {
    return this.searchParams.getAll(key);
  }

  has(key) {
    return this.searchParams.has(key);
  }

  keys() {
    return this.searchParams.keys();
  }

  set(key, val) {
    this.searchParams.set(key, val);
    this.replaceState();
  }

  sort() {
    this.searchParams.sort();
    this.replaceState();
  }

  toString() {
    this.searchParams.toString();
  }

  values() {
    this.searchParams.values();
  }
}

export default new QueryString();
