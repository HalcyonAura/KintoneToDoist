# [Kintone base taken from workshop found here](https://github.com/kintone-workshops/React-x-REST-API-Workshop/)

# Retrofitting Kintone Workshop (or existing workshops and sample code) to what you need

## Update DB
For a todo list add the following members

- Text: name
- Number: priority Range: 1-3
- Radio Button: completed Options: Yes/No

## Update Backend
- [x] `server.js`
- [x] `.env`

## Update supports
- [x] `postRecord.js`

## Update Frontend
- [x] `App.js`
- [x] Remove old inputs (selections)

## Update frontend (visually)/Improve UI
- [ ] Display existing items
- [ ] Add a filter to show all, completed, or incompleted items
- [ ] Add new item button
- [ ] Modal to add new item
- [ ] Add edit symbol to an item/clickable item that allows for editing of a todo item

## Update backend (editing)
- [ ] Pull a record and update changes `editRecord.js`
