# socket Io Event

# client receive event

## messeges

Someone write message

- eventName : `messages`
- data:

```json
[
  // ...
  {
    "id": "int",
    "name": "userName string",
    "message": "message string"
  }
  // ...
]
```

## checkUser

Someone move in Map

- EventName : `checkUser`
- data:

```json
[
  //..
  {
    "id": "int",
    "name": "userName string",
    "position": {
      "x": "int px",
      "y": "int px"
    }
  }
  // ...
]
```

# clinet emit Event

## message

when I write message

- eventName : `message`
- data:

```json
{
  "id": "int",
  "name": "userName string",
  "message": "message string"
}
```

## login

when client login

- eventName: `login`
- data:

```json
{
  "id": "int",
  "name": "userName String",
  "position": {
    "x": "int px",
    "y": "int px"
  }
}
```

## moveUser

when move myself

- eventName: `moveUser`
- data:

```json
{
  "id": "int",
  "name": "userName",
  "position": {
    "x": "int px",
    "y": "int px"
  }
}
```
