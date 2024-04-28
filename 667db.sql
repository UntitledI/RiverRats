// DB For 6667 Proj

table users
{
    id int PK
    username varchar(225) unique // not null
    pasword varchar(255) // not null
    email varchar(254) unique // not null 
    first_name varcahr(255)
    salt varchar(255) // more on this later
    profile_image varchar(255)
}

table games
{
    id int PK // game_id
    players_allowed int // not null 
    password varchar(100)
    active bool
    turn_player_id int // not null FK 
    created_at timestamp // not null
    updated_at timestamp // not null
    started_at timestamp // not null 
}

table game_users 
{
    user_id int // not null FK
    game_id int // not null FK
    seat int  // what seat in an array would they be seated in. can be FIFO 
    pot int // total money to be won in pot
    stack int // this is the players money aka all the chips they posess in one game
}
    // below is the relationship between tables and keys
Ref: game_users.game_id < games.id
Ref user_id.user_id < users.id

table game_states
{
    game_id // not null FK
    // can have multiple games. MAny to Many relationship
    active boolturn_player_id int // not null FK
    turn_number int // starts at 0
    round_number int // starts at 0 
}

table cards 
{
    id int PK
    number enum //enum
    suit int // enum
}

enum suits 
{
    hearts
    diamonds
    spades
    clubs
}

table game_cards 
{
    card_id int // FK
    game_id int // FK
    card_order int // has to shuffle cards in deck  
    cards_folded int// starts at 0 then incrementent with burn and fold hands
}
Ref: game_cards.card_id < cards.id
Ref: game_cards.game_id < games.id
Ref: game_cards.user_id < users.id 

table betting (
    betting_id INT PRIMARY KEY AUTO_INCREMENT,
    game_id INT NOT NULL,
    player_id INT NOT NULL,
    round_number INT NOT NULL,
    bet_amount DECIMAL(10, 2) NOT NULL,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (game_id) REFERENCES Games(game_id),
    FOREIGN KEY (player_id) REFERENCES Players(player_id)
);