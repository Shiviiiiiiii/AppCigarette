import React from 'react';

const RewardList = ({ points, setPoints }) => {
  const rewards = [
    { id: 1, text: 'Un bon pour une cigarette en plus', cost: 5 },
    { id: 2, text: 'Reward 2', cost: 10 },
    // Ajoutez plus de récompenses ici
  ];

  const buyReward = (rewardId) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (points >= reward.cost) {
      console.log("Buy");
      setPoints(points - reward.cost);
  
      // Envoi du message à Discord
      const message = `Quelqu'un vient d'acheter la récompense : ${reward.text}`;
      fetch('https://discord.com/api/webhooks/1253843365305516104/yHjCt8nZCGKGeIf1aJUc-bYjykFwkAw8eIwvwqrQpmXXXgBEo0uLKkHshume_7zNApvD', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: message
        })
      }).then(response => {
        if (!response.ok) {
          console.error('Erreur lors de l\'envoi du message à Discord');
        }
      }).catch(error => {
        console.error('Erreur lors de l\'envoi du message à Discord', error);
      });
    }
  };

  return (
    <div className="rewards">
      {rewards.map(reward => (
        <div key={reward.id} className={`reward-item`}>
          <span>{reward.text}</span>
           <button onClick={() => buyReward(reward.id)} disabled={points < reward.cost}>Acheter pour {reward.cost} points</button>
        </div>
      ))}
    </div>
  );
};

export default RewardList;