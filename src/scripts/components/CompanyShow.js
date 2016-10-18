var React = require ('react')
import CompanyHeader from './CompanyHeader'
import CompanyData from './CompanyData'
import NewsFeed from './NewsFeed'
import TransactionChart from './TransactionChart'

var CompanyShow = React.createClass({

  render: function() {
    return(
      <div className="companyShow">
        <CompanyHeader companyName={this.props.params.companyName}/>
        <TransactionChart companyName={this.props.params.companyName} />
        <NewsFeed companyName={this.props.params.companyName} />
        <CompanyData/>
      </div>
    )
  }
})

export default CompanyShow