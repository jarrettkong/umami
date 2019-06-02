import {trendingReducer} from './trendingReducer'
import * as mockData from '../util/mockData'
import * as actions from '../actions'

describe('trendingReducer', () => {
  it('should return the initial state', ()=>{
    const invalidAction = {
      type: 'INVALID_ACTION',
      payload: null
    }
    const result = trendingReducer(undefined, invalidAction)
    expect(result).toEqual([])
  })

  it('should return a payload of restaurants', ()=>{
    const result = trendingReducer(undefined, actions.addTrending(mockData.mockResults))
    expect(result).toEqual(mockData.mockResults)
  })
})

describe('resultsReducer')
