#!/bin/bash

API="https://localhost:7165"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
  }'

echo
