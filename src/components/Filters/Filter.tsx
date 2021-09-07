import React from 'react'

export interface IFilter {
  name: string,
  criteriaType: "int" | "string" | "boolean"
}

interface IFilterProps {
  filter: IFilter
}

function FilterString(props: IFilterProps) {
  return <p>{props.filter.name}</p>
}

function FilterInt(props: IFilterProps) {
  return <p>{props.filter.name}</p>
}

function FilterBoolean(props: IFilterProps) {
  return <p>{props.filter.name}</p>
}

function Filter(props: IFilterProps) {
  switch (props.filter.criteriaType) {
    case "string":
      return <FilterString filter={props.filter} />;
    case "int":
      return <FilterInt filter={props.filter} />;
    case "boolean":
      return <FilterBoolean filter={props.filter} />;
  }
}

export default Filter
