class ListItem extends React.Component {

    render() {
        return (
          <div className={this.props.class}>{this.props.tweet}</div>
        );
    }
}

class ShowProfileImage extends React.Component {

    render() {
        return (
          <img src={this.props.tweet} className={this.props.class} />
        );
    }
}

class TweetHandle extends React.Component {

    render() {
        return (
          <div className={this.props.class}>@{this.props.tweet}</div>
        );
    }
}

class ShowStats extends React.Component {

    render() {
        return (
          <div className={this.props.class}>
          	<img 
          		src="http://cdn.onlinewebfonts.com/svg/img_72121.png"
          		className="symbol"
          	/>
          	{this.props.tweet}
          </div>
        );
    }
}

class ShowTweets extends React.Component {
	render() {
        // let tweetElements = tweets[1].user.screen_name;
        let tweetElements = this.props.tweets.map( (tweet, index) => {
                              return (
	                              	<div key= {index} className="tweetBorder">
	                              		<div className="imageSide">
		                              		<ShowProfileImage
			                              		class="profilePicture" 
			                              		tweet="https://pbs.twimg.com/profile_images/3482019714/1a4eedb7d18f0e534cd696ebaa551c6a_400x400.jpeg"
			                              	></ShowProfileImage>
		                              	</div>
		                              	<div className="contentSide">
		                              		<div>
				                              	<ListItem
				                              		class="profileName" 
				                              		tweet="KANYE WEST"
				                              	></ListItem>
				                              	<TweetHandle
				                              		class="tweetHandle" 
				                              		tweet={tweet.user.screen_name}
				                              	></TweetHandle>
				                              	<ListItem
				                              		class="tweetTime" 
				                              		tweet={tweet.created_at}
				                              	></ListItem>
				                              	<ListItem
				                              		class="tweetMessage" 
				                              		tweet={tweet.text}
				                              	></ListItem>
				                              	<div>
					                              	<ShowStats
					                              		class="retweets" 
					                              		tweet={tweet.retweet_count}
					                              	></ShowStats>
					                              	<ShowStats
					                              		class="favorites" 
					                              		tweet={tweet.favorite_count}
					                              	></ShowStats>
				                              	</div>
				                            </div>
		                              	</div>
		                             </div>
                              	);
                            });
        return (
            <div>{tweetElements}</div>
        );
    }
	
}

ReactDOM.render(
      <ShowTweets tweets={tweets} />,
    document.getElementById('root')
);

// = tweets[1].user.screen_name;
