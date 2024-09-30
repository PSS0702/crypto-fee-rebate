# API Documentation

## Exchanges

### GET /api/exchanges
Returns a list of all exchanges.

**Response**
```json
[
  {
    "_id": "string",
    "name": "string",
    "url": "string",
    "feeStructure": {
      "maker": "number",
      "taker": "number"
    }
  }
]
```

## Users

### POST /api/users/register
Register a new user.

**Request Body**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response**
```json
{
  "token": "string"
}
```

### POST /api/users/login
Login a user.

**Request Body**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response**
```json
{
  "token": "string"
}
```

## Rebates

### POST /api/rebates/calculate
Calculate rebate for a trade.

**Request Body**
```json
{
  "exchangeId": "string",
  "tradeVolume": "number"
}
```

**Response**
```json
{
  "rebate": "number"
}
```
