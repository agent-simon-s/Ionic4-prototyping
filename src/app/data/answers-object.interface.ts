export interface AnswerObjectTemplate {
	pol    : number,
	scale  : string,
	choice : number,
	wVal   : number,
	esCum ?  : number,
	snCum ?  : number,
}

export interface AnswersArrayTemplate {
	array: AnswerObjectTemplate[];
}