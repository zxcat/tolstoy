import {
  APP_NAME,
  APP_URL,
  LANDING_PAGE_URL,
  LIQUID_TOKEN,
  DEBT_TOKEN,
  DEBT_TOKEN_SHORT,
  CURRENCY_SIGN,
  VESTING_TOKEN,
  VESTING_TOKEN1,
  VESTING_TOKEN2,
  VESTING_TOKEN3,
  VESTING_TOKENS,
  LIQUID_TICKER,
  SUPPORT_EMAIL } from 'config/client_config';
/**
 * see: app/locales/README.md
 */
const rs_latin =  {
  '24_hour': '24 časa',
  '24h_volume': 'Obim trgovine u 24h ',
  '30_day': '30 dana',
  APP_NAME_app_center: APP_NAME + ' App Centar',
  APP_NAME_can_only_register_one_account_per_verified_user: 'Molimo vas, imajte na umu da na ' + APP_NAME + ' platformi može registorvati samo jedan nalog po verifikovanom korisniku.',
  APP_NAME_cannot_recover_passwords_keep_this_page_in_a_secure_location: APP_NAME + ' Ne može oporaviti lozinke. Držite ovu stranicu u bezbednoj lokaciji, kao što je protivpožarna bezbednosna kutija ili sef.',
  APP_NAME_chat: APP_NAME + " Poruke",
  APP_NAME_is_a_social_media_platform_where_everyone_gets_paid: APP_NAME + ' je društvena mreža, gde je svako plaćen za kreiranje i glasanje sadržaja. On usklađuje robustan digitalni sistem poena, nazvan ' + LIQUID_TOKEN + ', koji podržava realnu vrednost za digitalne "nagrade" kroz tržišne cene i likvidnosti na tržištu digitnalnih valuta.',
  APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: APP_NAME + ' je društvena mreža gde <strong>svako</strong>&nbsp;biva <strong>plaćen</strong> za kreiranje i glasanje sadržaja.',
  APP_NAME_password_backup: APP_NAME + ' Rezervna kopija šifre.',
  APP_NAME_password_backup_required: APP_NAME + ' Rezervna kopija šifre (obavezna).',
  APP_NAME_support: APP_NAME + ' Podrška',
  APP_NAME_whitepaper: APP_NAME + " Whitepaper",
  APP_URL_is_now_open_source: APP_URL + ' je sada otvorenog koda.',
  DEBT_TOKEN_will_be_unavailable: 'Ova akcija će se održati 3,5 dana od sada i ne može biti poništena. Ovi ' + DEBT_TOKEN + ' će odmah postati nedostupni.',
  LIQUID_TOKEN_can_be_converted_to_VESTING_TOKEN_in_a_process_called_powering_up: LIQUID_TOKEN + ' se mogu pretvoriti u ' + VESTING_TOKEN + ' pomoču procesa koji se zove "powering up".',
  VESTING_TOKEN_is_non_transferrable_and_requires_convert_back_to_LIQUID_TOKEN: VESTING_TOKEN + ' nije prenosiv i zahteva 3 meseca (13 plaćanja) da se konvertujete nazad u ' + LIQUID_TOKEN + '.',
  VESTING_TOKEN_is_non_transferrable_and_will_require_2_years_and_104_payments_to_convert_back_to_LIQUID_TOKEN: VESTING_TOKEN2 + ' nije prenosiv i zahteva 20 nedelja da se konvertujete nazad u ' + LIQUID_TOKEN + '.',
  about: "Opis",
  about_APP_NAME: 'Sve o ' + APP_NAME,
  about_is_too_long: 'Opis je predugačak.',
  account_creation_succes: 'Vaš nalog je uspešno kreiran!',
  account_name: 'Account Name',
  account_name_is_not_available: 'Account name is not available',
  account_name_is_not_found: 'Account name is not found',
  account_name_should: 'Account Name ',
  account_name_should_be_longer: 'Account name should be longer.',
  account_name_should_be_shorter: 'Account name should be shorter.',
  account_name_should_have_only_letters_digits_or_dashes: 'Account name should have only letters, digits, or dashes.',
  account_name_should_start_with_a_letter: 'Account name should start with a letter.',
  account_not_found: 'Account not found',
  account_recovery_request_not_confirmed: "Account recovery request is not confirmed yet, please get back later, thank you for your patience.",
  account_recovery_succes: 'Your account has been successfully recovered!',
  account_registered_by_anoter_account_requires_10x_creation_fee_worth_of_VESTING_TOKEN_before_it_can_power_down: "Учетная запись должна набрать количество " + VESTING_TOKEN1 + " в 10 раз большее чем значение которое было заплачено за её создание, прежде чем она сможет начать понижение",
  account_updated: 'Account Updated',
  action: 'Action',
  active: 'active',
  active_or_owner: 'Active or Owner',
  add_image_url: 'Add image url',
  adjust_your: 'Adjust your',
  advanced: 'Advanced',
  after_printing_write_down_your_user_name: 'After printing, write down your user name',
  all_accounts_refunded: 'All Recovered Accounts have been fully Refunded',
  always_hide: 'Always hide',
  always_show: 'Always show',
  always_warn: 'Always warn',
  amount: 'Amount',
  amount_is_in_form: 'Amount is in the form 99999.999',
  amount_to_send: 'Amount to send {estimateInputCoin}',
  and: 'and',
  and_vote_for_it: 'and vote for it',
  are_well_tested_and_known_to_work_with: 'are well tested and known to work with ' + APP_URL + '.',
  are_you_sure: 'Are you sure?',
  ask: 'Ask',
  asset: "Asset",
  authenticate_for_this_transaction: 'Authenticate for this transaction',
  author_reward_of_VESTING_TOKEN_for: 'Author reward of {payout} and {reward} ' + VESTING_TOKEN + ' for',
  author_rewards: 'Author rewards',
  author_rewards_by_user_name: 'More rewards {user_name}',
  author_rewards_history: 'Author Rewards History',
  author_rewards_last_24_hours: 'Author rewards last 24 hours',
  author_rewards_last_week: "Author rewards last week",
  authors: 'Authors',
  authors_get_paid_when_people_like_you_upvote_their_post: 'Authors get paid when people like you upvote their post',
  auto_login_question_mark: 'Auto login?',
  available: 'Available',
  backup_password_by_storing_it: 'Back it up by storing in your password manager or a text file',
  balance: 'Balance',
  balance_subject_to_3_day_withdraw_waiting_period: 'Вывод баланса из сейфа на обычный счет, занимает 3 дня',
  balances: 'Balances',
  basic: 'Basic',
  be_longer: 'Should be longer.',
  be_shorter: 'Should be Shorter.',
  begin_recovery: "Begin Recovery",
  bid: 'Bid',
  blog: 'Blog',
  boost_payments: 'Boost Payments',
  broadcasted: 'Broadcasted',
  browse: 'Browse',
  buy: 'Buy',
  buy_LIQUID_TOKEN: 'Buy ' + LIQUID_TOKEN,
  buy_LIQUID_TOKEN_or_VESTING_TOKEN: 'Buy ' + LIQUID_TOKEN + ' or ' + VESTING_TOKEN,
  buy_VESTING_TOKEN: 'Buy ' + VESTING_TOKEN,
  buy_atleast_amount_for: 'Buy at least {min_to_receive} for {amount_to_sell} ({effectivePrice})',
  buy_or_sell: 'Buy or Sell',
  buy_orders: 'Buy Orders',
  by: ' by',
  by_verifying_you_agree: 'By verifying your account you agree to the ' + APP_NAME,
  by_verifying_you_agree_terms_and_conditions: 'terms and conditions',
  by_verifying_you_agree_with: 'By verifying your account you agree to the',
  by_verifying_you_agree_with_privacy_policy: 'Privacy Policy',
  by_verifying_you_agree_with_privacy_policy_of_website_APP_URL: 'of ' + APP_URL,
  cancel: 'Cancel',
  cancel_power_down: 'Cancel Power Down',
  cancel_this_withdraw_request: 'Cancel this withdraw request?',
  canceled: 'Canceled',
  cannot_increase_reward_of_post_within_the_last_minute_before_payout: 'Cannot increase reward of post within the last minute before payout',
  cant_confirm_account_ownership: 'We can\'t confirm account ownership. Check your password',
  change_account_password: "Change Account Password",
  change_deposit_address: 'Change Deposit Address',
  change_password: 'Change Password',
  changing_to_a_downvote: 'Changing to a Down-Vote',
  changing_to_an_upvote: 'Changing to an Up-Vote',
  checking_account_owner: 'Checking account owner',
  choose_currency: 'Choose currency',
  choose_language: 'Choose language',
  clear: 'Clear',
  click_to_generate_password: 'Click to generate password',
  click_to_respond: 'Click to respond',
  close: 'Close',
  collapse_or_expand: "Collapse/Expand",
  comment_is_nested_5_posts_deep: 'comment is nested 5 posts deep',
  comments: 'Comments',
  comments_by_user_name: 'Comments {user_name}',
  comments_were_hidden_due_to_low_ratings: 'Comments were hidden due to low ratings',
  confirm: 'Confirm',
  confirm_email: 'Confirm Email',
  confirm_flag: 'Confirm Flag',
  confirm_password: 'Confirm Password',
  confirm_follow: 'Are you sure you want to follow this user?',
  confirm_unfollow: 'Are you sure you want to unfollow this user?',
  confirm_ignore: 'Are you sure you want to block this user?',
  confirm_unignore: 'Are you sure you want to unblock this user?',
  confirmed: 'Confirmed',
  connection_lost_reconnecting: 'Connection lost, reconnecting',
  content_preferences: 'Content settings',
  continue: 'continue',
  continue_with_email: "Continue with Email",
  continue_with_facebook: 'Continue with Facebook',
  continue_with_reddit: 'Continue with Reddit',
  continue_with_vk: 'Continue with Vk',
  conversion_complete_tip: "Will complete on",
  convert: 'Convert',
  convert_to_LIQUID_TOKEN: 'Convert to ' + LIQUID_TOKEN,
  convert_to_VESTING_TOKEN: 'Convert to ' + VESTING_TOKEN,
  converted_VESTING_TOKEN_can_be_sent_to_yourself_but_can_not_transfer_again: 'Converted ' + VESTING_TOKEN + ' can be sent to yourself or someone else but can not transfer again without converting back to ' + LIQUID_TOKEN + '.',
  couldnt_create_account_server_returned_error: "Couldn\'t create account. Server returned the following error",
  create_a_post: 'Create a post',
  create_account: 'Create account',
  created: 'created',
  crowdsale: 'Crowdsale',
  cryptography_test_failed: 'Cryptography test failed',
  curation_reward_of_VESTING_TOKEN_for: 'Curation reward of {reward} ' + VESTING_TOKEN + ' for',
  curation_rewards: "Curation rewards",
  curation_rewards_by_user_name: 'Curation rewards {user_name}',
  curation_rewards_history: 'Curation Rewards History',
  curation_rewards_last_24_hours: 'Curation rewards last 24 hours',
  curation_rewards_last_week: "Curation rewards last week",
  curators: 'Curators',
  currency_market: "Currency Market",
  current_password: 'Current Password',
  daily_average_author_rewards: 'Daily average author rewards',
  daily_average_curation_rewards: 'Daily average curation rewards',
  date: 'Date',
  date_created: 'Date Created',
  deadline_for_recovery_is: 'Deadline for recovery is',
  decline_payout: 'Decline Payout',
  default50_50: '50% / 50%',
  delete: 'Delete',
  deposit: 'Deposit',
  deposit_using: 'Deposit using',
  dismiss: 'Dismiss',
  display_preferences: 'Display Settings',
  do_you_need_to: 'Do you need to',
  documentation: 'Documentation',
  dont_have_facebook: 'Don\'t have a Facebook or Reddit account?',
  downvote: 'Downvote',
  draft_saved: 'Saved in draft',
  each_account_segment_should: 'Username ',
  edit: 'Edit',
  editor: 'Editor',
  email: 'Email',
  email_address: 'Email Address',
  email_address_cannot_be_changed_at_this_moment_sorry_for_inconvenience: 'Email address cannot be changed at this moment, sorry for the inconvenience',
  email_confirmation: 'Email Confirmation',
  end_with_a_letter_or_digit: 'must end with a letter or number.',
  enter_amount: 'Enter Amount',
  enter_email_toverify_identity: 'We need to verify your identity. Please enter your email address below to begin the verification.',
  enter_some_text: 'Enter some text...',
  enter_username: 'Enter your username',
  estimate_account_value: 'Estimated Account Value',
  estimate_using: 'Estimate using',
  estimated_account_value: 'Estimated Account Value',
  estimated_author_rewards_last_week: "Estimated author rewards last week",
  estimated_curation_rewards_last_week: "Estimated curation rewards last week",
  exceeds_maximum_length: 'Exceeds maximum length ({maxKb}KB)',
  explore: "Explore",
  facebook_login_didnt_provide_any_email_addresses: 'Facebook login didnt provide any email address.',
  failed_captcha_verification_please_try_again: 'Failed captcha verification, please try again',
  faq: 'FAQ',
  feed: 'Feed',
  feedback: 'Feedback',
  feeds: 'Feeds',
  filter: "Filter",
  flag: "Flag",
  flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Flagging a post can remove rewards and make this material less visible. The flag should be used for the following',
  follow: 'Follow',
  followed_count: `{followingCount, plural, =0 {not following anybody} one {1 following} other {{followingCount} following}}`,
  follower_count: `{followerCount, plural, =0 {no followers} one {1 follower} other {{followerCount} followers}}`,
  followers: 'Followers',
  following: 'Following',
  form_requires_javascript_to_be_enabled: 'This form requires javascript to be enabled in your browser',
  fraud_or_plagiarism: 'Fraud or Plagiarism',
  from: 'from',
  full_faq: 'The full F.A.Q on Golos',
  generated_password: 'Generated Password',
  get_VESTING_TOKEN_when_sign_up: 'Get {signupBonus} ' + VESTING_TOKENS + ' when sign up.',
  get_deposit_address: 'Get Deposit Address',
  get_estimate: 'Get Estimate',
  get_sp_when_sign_up: 'Get {signupBonus} of ' + VESTING_TOKEN + ' when you sign up today.',
  get_sp_when_sign_up1: 'Получи ',
  get_sp_when_sign_up2: ' зарегистрировавшись сегодня.',
  hate_speech_or_internet_trolling: 'Hate Speech or Internet Trolling',
  have_only_letters_digits_or_dashes: 'You may only user letters, digits or dashes.',
  have_only_one_dash_in_a_row: ' You may only use one dash in a row.',
  hello_your_account_may_have_been_compromised_we_are_working_on_restoring_an_access: 'Hello your account may have been comprimised we are currentlu working on restoring access' + SUPPORT_EMAIL + '.',
  hide: 'Hide',
  hide_private_key: 'Hide private key',
  higher: 'Higher',
  highest_bid: 'Highest bid',
  history: 'History',
  home: 'home',
  hot: 'hot',
  however_you_can_use_it_to: "However, you can use it to",
  i_saved_password: 'I have securely saved my generated password',
  i_understand_dont_show_again: "I understand, don\'t show me again",
  if_you_did_not_make_this_change: 'If you did not make this change please',
  if_you_enjoyed_what_you_read_earn_amount: 'If you enjoyed what you read here, earn {amount} of ' + VESTING_TOKEN,
  if_you_need_a_new_account: 'if you need a new account',
  if_you_want_to_vote_outside_of_top_enter_account_name: 'If you would like to vote for a witness outside of the top 50, enter the account name below to cast a vote',
  image_not_shown_due_to_low_ratings: 'Image not shown due to low ratings.',
  images_were_hidden_due_to_low_ratings: 'Images were hidden due to low ratings.',
  in: 'in',
  in_conversion: "{amount} in conversion",
  in_reply_to: 'in reply to',
  in_week_convert_DEBT_TOKEN_to_LIQUID_TOKEN: 'In 3.5 days, convert {amount} ' + DEBT_TOKEN + ' into ' + LIQUID_TOKEN,
  including_the_category: "(including the category '{rootCategory}')",
  incorrect_password: 'Incorrect password',
  influence_tokens_which_earn_more_power_by_holding_long_term: 'Influence tokens which earn more power by holding long term.',
  information: 'Information',
  information_for_user: 'Information for user',
  insufficent_balance: 'Insufficient balance',
  insufficent_funds: 'Insufficent funds',
  intentional_miss_categorized_content_or_spam: 'Intentional miss-categorized content or Spam',
  internal_server_error: 'Internal Server Error',
  invalid_amount: 'Invalid amount',
  invalid_url: 'Неверный URL ',
  join_our_slack: 'Join our Slack',
  joined: 'Joined',
  keep_me_logged_in: 'Keep me logged in',
  last_price: 'Last price',
  learn_more: 'Learn More',
  learn_more_at_LANDING_PAGE_URL: 'Learn more at ' + LANDING_PAGE_URL,
  leave_this_unchecked_to_receive_half_your_reward: "Leave this unchecked to receive 1/2 your reward in " + VESTING_TOKEN + " and 1/2 in " + DEBT_TOKEN,
  loading: 'Loading',
  location_is_too_long: 'Location is too long',
  login: 'Login',
  login_to_see_memo: 'login to see memo',
  login_to_show: 'Login to show',
  login_to_your_APP_NAME_account: 'Login to your ' + APP_NAME + ' Account',
  login_with_facebook_or_reddit_media_to_verify_identity: 'Please login with Facebook or Reddit to verify your identity',
  login_with_social_media_to_verify_identity: 'Please login with {show_social_login} to verify you identity',
  logout: 'Logout',
  lower: 'Lower',
  lowest_ask: 'Lowest ask',
  markdown_is_supported: 'Styling with Markdown is supported',
  markdown_not_supported: 'Markdown is not supported here',
  market: "Market",
  max_accepted_payout: 'Max Accepted payout',
  maximum_tag_length_is_24_characters: 'Maximum tag length is 24 characters',
  membership_invitation_only: 'Membership to ' + APP_URL + ' is now under invitation only because of unexpectedly high sign up rate.',
  memo: 'Memo',
  more: 'more',
  move_funds_to_another_account: 'Move funds to another golos account.',
  must_end_with_a_letter_or_number: 'Must end with a letter or number',
  must_include_memo: 'You must include the memo above',
  must_start_with_a_letter: 'Must start with a letter',
  mute: 'Mute',
  muted_users: 'Muted Users',
  name_is_too_long: 'Name Is too long',
  name_must_not_begin_with_at: 'Name must not begin with @',
  need_password_or_key: 'You need a private password or key (not a public key)',
  new: 'new',
  new_password: 'New Password',
  new_posts: 'New Posts',
  new_topic_posts: 'Новые "{topic}" посты',
  newer: 'Newer',
  next: 'Next',
  next_power_down_is_scheduled_to_happen_at: 'The next power down is scheduled to happen',
  no: 'No',
  no_responses_yet_click_to_respond: 'No responses yet. Click to respond.',
  no_topics_by_order_found: "В разделе [{order}] пока нет постов!",
  not_be_empty: 'not be empty.',
  not_safe_for_work: 'Not safe for work',
  not_supported_email_address: 'Not a supported email address',
  not_valid: 'Not valid',
  not_valid_email: 'Not valid email',
  nothing_yet: 'Nothing yet',
  now_showing_comments_with_low_ratings: 'Now showing comments with low ratings',
  ok: 'Ok',
  older: 'Older',
  only_one_APP_NAME_account_allowed_per_ip_address_every_10_minutes: 'Only one Steem account allowed per IP address every 10 minutes',
  open_orders: 'Open Orders',
  or: 'или',
  or_click_the_button_below_to_register_with_facebook: 'Or click the button below to register with Facebook',
  order_cancel_confirm: 'Cancel order {order_id} from {user}?',
  order_cancelled: 'Order {order_id} cancelled.',
  order_placed: 'Order placed',
  our_records_indicate_you_already_have_account: 'Our records indicate that you already have ' + APP_NAME + ' account',
  owhership_changed_on: 'Ownership Changed On',
  owner: 'Owner',
  password: 'Password',
  password_info: 'This password or private key was entered incorrectly.  There is probably a handwriting or data-entry error.  Hint: A password or private key generated by Steemit will never contain 0 (zero), O (capital o), I (capital i) and l (lower case L) characters.',
  password_is_bound_to_your_accounts_owner_key: "This password is bound to your account\'s owner key and can not be used to login to this site",
  password_must_be_characters_or_more: 'Password must be {amount} characters or more',
  password_not_used_in_last_days: 'This password was not used on this account in the last 30 days.',
  password_or_wif: 'Password or WIF',
  password_update_succes: 'The password for {accountName} was successfully updated',
  passwords_do_not_match: 'Passwords do not match',
  past_payouts: 'Past Payouts',
  paste_a_youtube_or_vimeo_and_press_enter: 'Paste a YouTube or Vimeo and press Enter',
  pay_me_100_in_VESTING_TOKEN: 'Pay me 100% in ' + VESTING_TOKEN,
  payout_time: 'payout time',
  payouts: 'Payouts',
  payouts_by_tag: 'Payouts by tag',
  payouts_declined: 'Payouts declined',
  pending_payout: 'Pending Payout',
  pending_savings_withdrawals: 'Pending savings withdrawals',
  people_followed_by_user_name: '{user_name} followed',
  people_following_user_name: 'Following {user_name}',
  permissions: 'Permissions',
  personal_info_will_be_private: 'Your personal information will be kept',
  personal_info_will_be_private_link: 'Private',
  please_email_questions_to: 'Please email your questions to',
  please_make_sure_you_dont_use_temporary_email_providers_contact_SUPPORT_URL: 'Please make sure you dont use a temporary email address when contacting' + SUPPORT_EMAIL + ' .',
  please_prove_an_email_address: 'Please provide an email address',
  please_provide_your_email_address_to_continue_the_registration_process: 'Please provide your email address to continue the registration process',
  please_remove_following_html_elements: 'Please remove the following HTML elements from your post: ',
  popular: 'popular',
  post: 'Post',
  post_as: 'Post as',
  post_count: `{postCount, plural, =0 {no posts} one {1 post} other {{postCount} posts}}`,
  posting: 'Posting',
  posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
  posts: 'Posts',
  potential_payout: 'Potential Payout',
  power_down: 'Power Down',
  power_up: 'Power Up',
  power_up_on: 'Power Up 100%',
  powered_by: 'Powered by',
  preview: 'Preview',
  previous: 'Previous',
  price: 'Price',
  price_warning_above: 'This price is well above the current market price of {marketPrice}, are you sure?',
  price_warning_below: 'This price is well below the current market price of {marketPrice}, are you sure?',
  print: 'Print',
  privacy_policy: "Privacy Policy",
  private: 'Private',
  private_something_key: 'Private {key} Key',
  processing: 'Processing',
  profile: 'Profile',
  profile_about: 'About',
  profile_image_url: 'Profile picture url',
  profile_location: 'Location',
  profile_name: 'Display Name',
  profile_website: 'Website',
  promote: 'Promote',
  promote_post: 'Promote Post',
  promoted: 'promoted',
  protect_funds_by_requiring_a_3_day_withdraw_waiting_period: 'Protect funds by requiring a 3 day withdraw waiting period.',
  proxy_update_error: "Your proxy was not updated",
  public: 'Public',
  public_something_key: 'Public {key} Key',
  raw_html: 'Raw HTML',
  re: 'ОТ',
  re_enter_generate_password: 'Re-enter Generated Password',
  re_send_email: 'Re-send email',
  read_only_mode: 'Due to server maintenance we are running in read only mode. We are sorry for the inconvenience.',
  reblog: "Resteem",
  reblogged_by: 'Resteemed by',
  recent_password: 'Recent Password',
  recent_replies_to_users_posts: "Recent replies to {name}'s posts",
  recieve_amount_VESTING_TOKEN_from: "Receive {amount} " + VESTING_TOKEN + " from",
  recieve_amount_from: "Receive {amount} from",
  recieve_interest_of: 'Receive interest of {interest}',
  recover_account: 'Recover Account',
  recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on " + APP_URL + " if the account owner had perviously listed ‘" + APP_NAME + "’ as their account trustee and complied with " + APP_NAME + "’s Terms of Service.",
  recover_password: 'Recover Account',
  recover_your_account: 'recover your account',
  recovering_account: 'Recovering account',
  register_with_facebook: 'Register with Facebook',
  remember_voting_and_posting_key: "Remember voting & posting key",
  remove: 'Remove',
  remove_vote: 'Remove Vote',
  removing_your_vote: 'Removing your vote',
  replied_to: 'replied to',
  replies: 'Replies',
  replies_by_user_name: 'Replies {user_name}',
  reply: 'Reply',
  reply_count: `{replyCount, plural, =0 {no replies} one {1 reply} other {{replyCount} replies}}`,
  reputation: "Reputation",
  request_already_submitted_contact_support: 'Your request has been already submitted and we are working on it. Please contact t@cyber.fund for the status of your request.',
  required: 'Required',
  requires_5_or_more_reddit_comment_karma: 'requires 5 or more Reddit comment karma',
  requires_auth_key: 'This operation requires your {authType} key (or use your master password)',
  requires_positive_karma: 'requires positive Reddit comment karma',
  research_it: 'Research it',
  reset_usernames_password: "Reset {username}'s Password",
  resources: 'Resources',
  response_count: `{responseCount, plural, =0 {no responses} one {1 responses} other {{responseCount} responses}}`,
  responses: 'responses',
  resteem_this_post: 'Resteem this post',
  reveal_comment: 'Reveal comment',
  reveal_it: 'Reveal it',
  rewards: 'Rewards',
  save: 'Save',
  save_avatar: 'Save avatar',
  saved: 'Saved',
  savings: 'Savings',
  savings_withdraw: 'Savings Withdraw',
  search: 'Search',
  select_a_tag: 'Select a tag',
  select_topic: 'Select Topic',
  sell: 'Sell',
  sell_LIQUID_TOKEN: 'Sell ' + LIQUID_TOKEN,
  sell_amount_for_atleast: 'Sell {amount_to_sell} for at least {min_to_receive} ({effectivePrice})',
  sell_orders: 'Sell Orders',
  send_amount_of_coins_to: 'Send {value} {coinName} to',
  send_to_account: "Send to account",
  send_us_email: 'send us email',
  sending_recovery_request: 'Sending recovery request',
  server_returned_error: 'server returned error',
  set_witness_proxy: "You can also choose a proxy that will vote for witnesses for you. This will reset your current witness selection.",
  settings: 'Settings',
  share: 'Share',
  shorten_title: 'Shorten title',
  show: 'Show',
  show_less: 'Show fewer',
  show_less_low_value_posts: "Show fewer low value posts",
  show_more: 'Show more',
  show_more_low_value_posts: "Show more low value posts",
  show_more_topics: "Show more topics",
  show_private_key: 'Show private key',
  sign: 'Sign',
  sign_up: "Sign Up",
  sorry_your_reddit_account_doesnt_have_enough_karma: "Sorry, your Reddit account doesn\'t have enough Reddit Karma to qualify for a free sign up. Please add your email for a place on the waiting list",
  sort_order: 'Sort Order',
  sort_order_posts: '{sort_order} посты',
  sort_order_topic_posts: '{sort_order} "{topic}" посты',
  spend_your_DEBT_TOKEN_to_advertise_this_post: 'Spend your ' + DEBT_TOKEN + 's to advertise this post in the promoted content section',
  spread: 'Spread',
  start_power_down_of: "Start power down of",
  start_with_a_letter: 'Start with a lertter.',
  steem_dollar: DEBT_TOKEN,
  steem_power: LIQUID_TOKEN,
  steemit_api_docs: "Steemit API Docs",
  steemit_chat: "Steemit чат",
  stolen_account_recovery: "Stolen Accounts Recovery",
  stop_power_down: "Stop power down",
  stop_seeing_content_from_this_user: 'Stop seeing content from this user',
  submit_a_story: 'Submit a Story',
  submit_email_to_get_on_waiting_list: 'Submit your email to get on the waiting list',
  subscribe_to_get_sms_confirm: 'Subscribe to get a notification when SMS confirmation is available',
  successfully_authenticated_with: 'Sucessfully authenticated with',
  suggested_limit: 'Suggested limit {depositLimit}',
  tag: 'Tag',
  tag_your_story: 'Tag (up to 5 tags), the first tag is your main category.',
  tags_and_topics: "Tags and Topics",
  team: 'Команда',
  terms_and_conditions: 'Terms and Conditions',
  terms_of_service: "Terms of Service",
  thank_you_for_being_an_early_visitor_to_APP_NAME: 'Thank you for being an early visitor to ' + APP_NAME + '. We will get back to you at the earliest possible opportunity.',
  thank_you_for_providing_your_email_address: 'Thank you for providing your email address',
  thanks_for_submitting_request_for_account_recovery: '<p>Thanks for submitting your request for Account Recovery using ' + APP_NAME + '’s blockchain-based multi factor authentication.</p> <p>We will respond to you as quickly as possible, however, please expect there may be some delay in response due to high volume of emails.</p> <p>Please be prepared to verify your identity.</p> <p>Regards,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
  the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
  the_estimated_value_is_based_on_a_7_day_average_value_of_LIQUID_TOKEN_in_currency: 'The estimated value is based on a 7 day average value of ' + LIQUID_TOKEN + ' in US Dollars.',
  the_latest_versions_of: 'The latest versions of',
  the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
  the_more_you_hold_the_more_you_influence_post_rewards: 'The more you hold the more you influence post rewards and earn for accurate voting.',
  the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
  the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
  the_rules_of_APP_NAME: "The first rule of " + APP_NAME + " is: Do not lose your password.<br /> The second rule of " + APP_NAME + " is: Do <strong>not</strong> lose your password.<br /> The third rule of " + APP_NAME + " is: We cannot recover your password.<br /> The fourth rule: If you can remember the password, it&apos;s not secure.<br /> The fifth rule: Use only randomly-generated passwords.<br /> The sixth rule: Do not tell anyone your password.<br /> The seventh rule: Always back up your password.",
  there_was_an_error_uploading_your_image: 'There was an error uploading your image',
  this_information_allows_steemit_to_assist_with_account_recovery_in_case_your_account_is_ever_compormised: 'This information allows Steemit to assist with Account Recovery in case your account is ever compromised',
  this_is_a_price_feed_conversion: 'This is a price feed conversion. The 3.5 day delay is necessary to prevent abuse from gaming the price feed average',
  this_is_users_reputations_score_it_is_based_on_history_of_votes: "This is {name}'s reputation score.↵↵The reputation score is based on the history of votes received by the account, and is used to hide low quality content.",
  this_is_wrong_password: 'This is the wrong password',
  this_login_gives_owner_or_active_permissions_and_should_not_be_used_here: 'This login gives owner or active permissions and it should not be used here',
  this_memo_is_private: 'This Memo is Private',
  this_memo_is_public: 'This Memo is Public',
  this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
  this_post_is: 'Данный пост содержит тэг –',
  this_post_was_hidden_due_to_low_ratings: 'This post was hidden due to low ratings',
  this_will_update_usernames_authtype_key: 'This will update {username} {authType} key',
  title: "Title",
  to: 'to',
  to_continue_please_click_on_the_link_in_the_email_weve_sent_you: 'To continue please click on the link in the email we\'ve sent you',
  to_obtaion_a_more_secure_set_of_keys: "to obtain a more secure set of keys",
  to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user: 'In order to prevent abuse (each registered account costs {amount} in ' + LIQUID_TOKEN + ') ' + APP_NAME + ' can only register one account per verified user.',
  to_save_your_preferences: 'для того чтобы сохранить настройки.',
  to_your_existing_account_or: 'to your existing account or',
  tokens_worth_about_AMOUNT_of_LIQUID_TOKEN: 'Tokens worth about {amount} of ' + LIQUID_TOKEN + '.',
  top_witnesses: 'Witness Voting',
  topics: 'Topics',
  total: 'Total',
  total_DEBT_TOKEN_SHORT_CURRENCY_SIGN: "Total " + DEBT_TOKEN_SHORT + ' (' + CURRENCY_SIGN + ')',
  trade_history: 'Trade History',
  tradeable_tokens_that_may_be_transferred_anywhere_at_anytime: 'Tradeable tokens that may be transferred anywhere at anytime.',
  transaction_failed_error: 'Transaction failed: {error}',
  transaction_history: 'Transaction History',
  transfer: 'Transfer',
  transfer_amount_VESTING_TOKEN_from_to: "Transfer {amount} " + VESTING_TOKEN + " from {from} to",
  transfer_amount_VESTING_TOKEN_to: "Transfer {amount} " + VESTING_TOKEN + " to",
  transfer_amount_from: "Transfer {amount} from",
  transfer_amount_steem_power_to: "Transfer {amount} "+LIQUID_TICKER+" в "+VESTING_TOKEN2,
  transfer_amount_to: "Transfer {amount} to",
  transfer_amount_to_VESTING_TOKEN: "Transfer {amount} to " + VESTING_TOKEN,
  transfer_to_account: 'Transfer to Account',
  transfer_to_savings: 'Transfer to Savings',
  transfers_are_temporary_disabled: 'Transfers are temporary disabled',
  trending: 'trending',
  trending30: 'trending (30 day)',
  trending_24_hour: 'trending (24 hour)',
  trending_30_day: 'trending (30 day)',
  type: 'Type',
  unable_to_log_you_in: 'We will be unable to log you in with this browser',
  unable_to_recover_account_not_change_ownership_recently: 'We are unable to recover this account, it has not changed ownership recently.',
  understand_that_APP_NAME_cannot_recover_password: 'I understand that ' + APP_NAME + ' cannot recover lost passwords',
  unfollow: 'Unfollow',
  unknown: 'Unknown',
  unknown_account: 'Unknown Account',
  unmute: 'Unmute',
  unverified_transactions: `{transactionsCount, plural, zero {0 неподтвержденных транзакций} one {# неподтвержденную транзакцию} few {# неподтвержденныe транзакции} many {# неподтвержденных транзакций}}`,
  update: 'Update',
  update_estimate: 'Update Estimate',
  update_password: 'Update Password',
  update_post: 'Update Post',
  update_your_password: 'update your password',
  updated: 'updated',
  upvote: 'Upvote',
  upvote_own_post: 'upvote your post',
  upvote_post: 'Upvote post',
  url_is_too_long: 'Url is too long',
  use_limited_amount_of_tags: 'You have {tagsLength} tags total {includingCategory}.  Please use only 5 in your post and category line.',
  use_limitied_amount_of_categories: 'Please use only {amount} categories',
  use_one_dash: 'Use only one dash',
  use_only_2_digits_of_precison: 'Вводите не более 2-х цифр в дробной части',
  use_only_allowed_characters: 'Use only lowercase letters, digits and one dash',
  use_only_lowercase_letters: 'Use only lowercase letters',
  use_spaces_to_separate_tags: 'Use spaces to separate tags',
  user_avatar: 'User Avatar',
  user_hasnt_followed_anything_yet: "Looks like {name} hasn\'t followed anything yet!",
  user_hasnt_had_any_replies_yet: "{name} hasn\'t had any replies yet",
  user_hasnt_made_any_posts_yet: "Looks like {name} hasn\'t made any posts yet!",
  user_hasnt_started_bloggin_yet: "Looks like {name} hasn\'t started blogging yet!",
  you_hasnt_started_bloggin_yet:  "Looks like you hasn\'t started blogging yet!",
  user_not_found: 'user not found',
  username: 'Username',
  username_does_not_exist: 'Username does not exist',
  users_author_rewards: "{name}'s author rewards",
  users_blog: "{name}'s blog",
  users_curation_rewards: "{name}'s curation rewards",
  users_permissions: "{name}'s permissions",
  users_posts: "{name}'s posts",
  users_wallet: "{name}'s wallet",
  value_posts: 'low value posts',
  version: 'Version',
  video: 'Video',
  view_count: `{viewCount, plural, zero {0 просмотров} one {# просмотр} few {# просмотра} many {# просмотров}}`,
  view_the_direct_parent: 'View the direct parent',
  view_the_full_context: 'View the full context',
  vote: 'Vote',
  vote_count: `{voteCount, plural, =0 {no votes} one {1 vote} other {{voteCount} votes}}`,
  vote_currently_exists_user_must_be_indicate_a_to_reject_witness: 'vote currently exists, user must be indicate a desire to reject witness',
  vote_for_witnesses: "Vote for Witnesses",
  votes: 'votes',
  wallet: 'Wallet',
  warning: 'warning',
  we_are_sorry_we_cannot_sign_you_up_at_this_time_because_ip_associated_with_bots_activity: 'We are sorry we cannot sign you up currently at this time because this ip is associated with bot activity contact ' + SUPPORT_EMAIL + ' for further information.',
  we_couldnt_verify_your_account_contact_us_at_SUPPORT_EMAIL: 'We couldnt verify your email contact us at ' + SUPPORT_EMAIL + ' for further information.',
  we_require_social_account: APP_NAME + ' funds each account with over {signup_bonus} worth of ' + VESTING_TOKEN + '; to prevent abuse, we require new users to login via social media.',
  we_require_social_account1: APP_NAME + ' спонсирует каждый аккаунт на сумму около ',
  we_require_social_account2: '. Чтобы предотвратить злоупотребление, мы просим новых пользователей регистрироваться используя социальные сети.',
  we_will_be_unable_to_create_account_with_this_browser: 'We will be unable to create your ' + APP_NAME + ' account with this browser',
  we_will_reset_curation_rewards_for_this_post: 'will reset your curation rewards for this post',
  welcome: 'Welcome',
  welcome_to_the_blockchain: 'Welcome to the Blockchain!',
  when_you: "when you",
  when_you_link_text: 'Sign Up',
  wiki: 'Wiki',
  withdraw: 'Withdraw',
  withdraw_funds_after_the_required_3_day_waiting_period: 'Withdraw funds after the required 3 day waiting period.',
  withdraw_steem: 'Withdraw ' + LIQUID_TOKEN + ' on current ',
  withdraw_steem_dollars: 'Withdraw ' + DEBT_TOKEN_SHORT + ' on current savings',
  witness: 'Witness',
  witness_proxy_clear: "Clear proxy",
  witness_proxy_current: "Your current proxy is",
  witness_proxy_set: "Set proxy",
  witness_set: "You have set a voting proxy. If you would like to reenable manual voting, please clear your proxy.",
  witness_thread: 'witness thread',
  witnesses: "Witnesses",
  write_your_story: 'Write your story',
  yes: 'Yes',
  you: 'You',
  you_already_voted_for_this_post: 'You already voted for this post',
  you_are_viewing_single_comments_thread_from: 'You are viewing a single comment\'s thread from',
  you_can: 'You can',
  you_can_either: 'You can either',
  you_can_like_a_post_only_after_3_sec_after_last_post: 'Can only vote once every 3 seconds.',
  you_can_vote_for_maximum_of_witnesses: 'You can vote for a maximum of 30 witnesses',
  you_have_votes_remaining: `You have {votesCount, plural, =0 {no votes} one {1 vote} other {{votesCount} votes}} remaining`,
  you_may_only_comment_once_every_20_seconds: 'you may comment once every 20 seconds',
  you_may_only_post_once_per_minute: 'you may only post once per minute.',
  you_need_private_password_or_key_not_a_public_key: 'You need a private password or key (not a public key)',
  you_need_to_logout_before_creating_account: 'You need to {logoutLink} before you can create another account',
  you_successdully_promoted_this_post: 'You successfully promoted this post',
  you_successfully_promoted_this_post: 'You successfully promoted this post',
  your_existing_DEBT_TOKEN_are_liquid_and_transferable: 'Your existing ' + DEBT_TOKEN + ' are liquid and transferable. Instead you may wish to trade ' + DEBT_TOKEN + ' directly in this site under {link} or transfer to an external market.',
  your_password_permissions_were_reduced: 'Your password permissions were reduced',
  your_voice_is_worth_something: 'Your voice is worth something',
  сancel_transfer_from_savings: 'Cancel transfer from savings (id запроса {request})',
}

export { en }