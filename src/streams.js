import { Subject } from 'rxjs'

export const someTing$ = new Subject()

export const someTingElse$ = new Subject()

someTing$.subscribe(t => someTingElse$.next(`"${t}"`))
