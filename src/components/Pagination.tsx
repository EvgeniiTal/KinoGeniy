import { useParams, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

interface Props {
  onClick(pageNumber: number): void
}

export function Pagination(props: Props): JSX.Element {
  const { page } = useParams()
  const { pagesCounter } = useSelector((state: any) => state.movieList)

  function buildPaginationScheme (): any {
    const prevPageNumber: number = Number(page) - 1
    const nextPageNumber: number = Number(page) + 1

    const scheme: number[] = [1, prevPageNumber, Number(page), nextPageNumber, pagesCounter]
    const filtredScheme: number[] = scheme.filter((item: number) => item > 0 && item <= pagesCounter)
    const set = new Set(filtredScheme)
    const result: any = Array.from(set)

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...')
    if (result.at(-2) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...')

    return result
  }

  function renderPagination (): JSX.Element {
    const paginationScheme = buildPaginationScheme()

    return paginationScheme.map((pageNumber: any , index: number) => {
      if (pageNumber === '...') {
        return (
          <li className="page-item disabled" key={index}>
            <span className="page-link">{pageNumber}</span>
          </li>
        )
      }

      return (
        <li className="page-item" key={index}>
          <NavLink className="page-link" to={`/films/${pageNumber}`} onClick={() => props.onClick(pageNumber)}>{pageNumber}</NavLink>
        </li>
      )
    })
  }

  return renderPagination()
}
