# Research

## jq

jq is a fast tool to query json formatted data.

## schema.org

To analyze the structure of the schema.org file, we use jq.

The code to create the schema-structure.json is:

```bash
curl https://schema.org/version/latest/schemaorg-current-https.jsonld | jq 'recurse | objects | keys | unique' | jq -s 'unique' > schema-structure.json
```

To get the keys with the corresponding type, we used:

```bash
curl https://schema.org/version/latest/schemaorg-current-https.jsonld | jq 'recurse | objects | to_entries | map({key: .key, type: (.value | type)}) | unique_by(.key + .type)' | jq -s 'add | unique_by(.key + .type)'

```

To get the paths, we used this command:

```bash
curl https://schema.org/version/latest/schemaorg-current-https.jsonld | jq '
  paths |
  map(tostring) |
  join(".")
' | sort | uniq > paths.json
```
