import React from 'react';

var Dropdown = function Dropdown(_ref) {
  var value = _ref.value,
      options = _ref.options,
      _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("select", {
    className: "h-10 w-40 rounded items-center border-solid border border-green-700 text-green-900 py-1 text-sm font-semibold outline-none",
    defaultValue: value,
    onChange: function onChange(evt) {
      return _onChange(evt.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select value"), options.map(function (o, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(o.value, "_").concat(index),
      value: o.value
    }, o.label);
  }));
};

var Section = function Section(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex w-full justify-center mt-5"
  }, children);
};

var Table = function Table(_ref) {
  var data = _ref.data,
      columns = _ref.columns;

  if (!data.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement("table", {
    className: "table-auto text-sm text-green-900 border-solid border border-gray-300 min-w-max m-5"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "hidden sm:table-header-group"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "border-solid border-t border-gray-300"
  }, columns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      className: "p-4",
      key: column
    }, column);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "font-light"
  }, data.map(function (row, index) {
    return /*#__PURE__*/React.createElement("tr", {
      className: "border-solid border-t border-gray-300 odd:bg-green-900 odd:bg-opacity-10 sm:odd:bg-gray-50",
      key: index
    }, row.map(function (cell, index) {
      return /*#__PURE__*/React.createElement("td", {
        className: "flex sm:table-cell justify-between sm:justify-center p-4",
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "sm:hidden w-1/2 flex font-semibold"
      }, columns[index]), /*#__PURE__*/React.createElement("div", {
        className: "w-1/2 sm:w-full"
      }, cell));
    }));
  })));
};

export { Dropdown, Section, Table };
