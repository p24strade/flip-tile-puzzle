CARD
initialCardValues
flippedCards
matchedCards

IF CARD is in matchedCards:
    * return
IF flippedCards.length == 0:
    * push CARD to flippedCards
    * RETURN
ELSE IF flippedCards.length == 1:
    * push CARD to flippedCards

IF first and second card in flippedCards are the same:
    * push both cards to matchedCards
ELSE:
    * set both cards isFlipped to False

<!-- <Card card={card} onClick={() => {handleCardClick(idx)}}> -->