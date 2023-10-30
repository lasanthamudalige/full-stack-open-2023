import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    const { good, neutral, bad } = props
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positivePercentage = (good * 100) / all

    return (
        <div>
            <h2>Statistics</h2>
            {all ?
                <div>
                    <table>
                        <tr>
                            <StatisticLine text='Good' value={good} />
                        </tr>
                        <tr>
                            <StatisticLine text='Neutral' value={neutral} />
                        </tr>
                        <tr>
                            <StatisticLine text='Bad' value={bad} />
                        </tr>
                        <tr>
                            <StatisticLine text='All' value={all} />
                        </tr>
                        <tr>
                            <StatisticLine text='Average' value={average} />
                        </tr>
                        <tr>
                            <StatisticLine text='Positive' value={positivePercentage + ' %'} />
                        </tr>
                    </table>
                </div> : <p>No feedback given</p>
            }
        </div>
    )

}

export default Statistics