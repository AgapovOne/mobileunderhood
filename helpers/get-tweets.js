import Twitter from 'twit';
import dec from 'bignum-dec';
import { merge, pipe, prop, last, head, concat, isEmpty, max, sortBy } from 'ramda';
import log from './log';

const defaults = {
  count: 200,
  trim_user: true,
  include_rts: true,
  exclude_replies: false,
};

function getNextOptions(options, tweets) {
  const lastId = pipe(last, prop('id_str'), dec);
  // const lastFetchedTweetId = last(tweets) && lastId(tweets);

  const lastFetchedTweetId = head(sortBy(max)(tweets.map(t => t.id_str)));


  // 1. Get all to finished. Since previous, max -> maxId
  // 2. Get batch of 200. Since previous, max -> maxId
  // 3. Get next batch of 200. Since = last tweet, max -> maxId

  log('last', lastFetchedTweetId);
  return merge(options, lastFetchedTweetId && { since_id: lastFetchedTweetId } || {});
}

function accumulate(client, options, tweets) {
  const nextOptions = getNextOptions(options, tweets);
  log(nextOptions);
  return client.get('statuses/user_timeline', nextOptions).then((res) => {
    log(res.data.length);
    const accumulatedTweets = concat(tweets, res.data);
    return isEmpty(res.data)
      ? accumulatedTweets
      : accumulate(client, nextOptions, accumulatedTweets);
  });
}

export default function getTweets(tokens, username, sinceId, maxId) {
  log('start');
  log('FETCHING', sinceId, maxId);
  const addedOptions = maxId && { max_id: maxId } || null;

  const client = new Twitter(tokens);
  const options = merge(merge(defaults, { screen_name: username, since_id: sinceId }), addedOptions);
  return accumulate(client, options, []);
}
