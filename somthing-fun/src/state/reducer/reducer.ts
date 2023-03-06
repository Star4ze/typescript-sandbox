import Actions from "../Actions";
import { initialState } from "../initialState";


export default function stateReducer(state: any, action: any) {   //need to change type
    switch (action.type) {
        case (Actions.setPlayer1):
            return { ...state, player1: { name: action.payload, score: 0 } }

        case (Actions.setPlayer2):
            return { ...state, player2: { name: action.payload, score: 0 } }

        case (Actions.player1Scored):
            return { ...state, player1: { score: state.player1.score++ } }

        case (Actions.player2Scored):
            return { ...state, player2: { score: state.player2.score++ } }

        case (Actions.setCategory):
            return { ...state, category: action.payload }

        default:
            return initialState;
    }
}
