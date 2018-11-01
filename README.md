# Update Query String

The QueryString interface(same as [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)) defines utility methods to modify the current URL query string.

## Installation

```
npm i update-query-string
```

## Example

```javascript
import QueryString from "update-query-string";

// current URL: http://example.com/?q=URLUtils.searchParams&topic=api

QueryString.has("topic") === true; // true
QueryString.get("topic") === "api"; // true
QueryString.getAll("topic"); // ["api"]
QueryString.get("foo") === null; // true
QueryString.append("topic", "webdev"); // current URL: http://example.com/?q=URLUtils.searchParams&topic=api&topic=webdev
QueryString.set("topic", "More webdev"); // current URL: http://example.com/?q=URLUtils.searchParams&topic=More+webdev"
QueryString.delete("topic"); // current URL: http://example.com/?q=URLUtils.searchParams"
```

## Methods

### QueryString.append(key, value)

Appends a specified key/value pair as a new search parameter in current URL query string.

### QueryString.delete(key)

Deletes the given search parameter, and its associated value, from the list of all search parameters in current URL query string.

### QueryString.entries()

Returns an iterator allowing to go through all key/value pairs contained in this object.

### QueryString.get(key)

Returns the first value associated to the given search parameter.

### QueryString.getAll()

Returns all the values associated with a given search parameter.

### QueryString.has(key)

Returns a Boolean indicating if such a search parameter exists.

### QueryString.keys()

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.

### QueryString.set(key, value)

Sets the value associated to a given search parameter to the given value in current URL query string. If there were several values, delete the others.

### QueryString.sort()

Sorts all key/value pairs in current URL query string, if any, by their keys.

### QueryString.toString()

Returns a string containing a query string suitable for use in a URL.

### QueryString.values()

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

## Browser compatibility

- Microsoft Edge
- Chrome 61+
